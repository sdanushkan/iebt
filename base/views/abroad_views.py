from django.shortcuts import render
from datetime import timedelta, datetime

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Country, Testimonial, DualQualificaion
from base.serializers import CountrySerializer, TestimonialSerializer

from rest_framework import status

   
@api_view(['GET'])
def getCountries(request, cat):
    try:
        # Check if DualQualification with name='yes' exists
        if DualQualificaion.objects.filter(name='yes').exists():
            countries = Country.objects.filter(category__slug=cat)
            
            if not countries.exists():
                return Response({'detail': 'No Country Found'}, status=404)
            
            serializer = CountrySerializer(countries, many=True)
            return Response(serializer.data)
        else:
            return Response({'detail': 'No Country found'}, status=404)
    except Exception as e:
        return Response({'detail': str(e)}, status=400)


@api_view(['GET'])
def getTestimonials(request, page):
    try:
        # Check if DualQualification with name 'yes' exists
        if DualQualificaion.objects.filter(name='yes').exists():
            # Fetch testimonials based on the page slug
            testimonials = Testimonial.objects.filter(page__slug=page)
            serializer = TestimonialSerializer(testimonials, many=True)
            return Response(serializer.data)
        else:
            return Response({'detail': 'No Testimonials found'}, status=404)
    except Testimonial.DoesNotExist:
        return Response({'detail': 'No Testimonials Found'}, status=404)


@api_view(['GET'])
def getCountry(request, slug):
    try:
        # Check if DualQualification with name='yes' exists
        if DualQualificaion.objects.filter(name='yes').exists():
            try:
                countries = Country.objects.get(slug=slug)
                serializer = CountrySerializer(countries, many=False)
                return Response(serializer.data)
            except Country.DoesNotExist:
                return Response({'detail': 'No Country Found'}, status=404)
        else:
            return Response({'detail': 'No Country found'}, status=404)
    except DualQualificaion.DoesNotExist:
        return Response({'detail': 'No Country found'}, status=404)