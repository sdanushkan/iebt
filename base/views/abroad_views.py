from django.shortcuts import render
from datetime import timedelta, datetime

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Country, AbroadApplication, Testimonial
from base.serializers import CountrySerializer, AbroadApplicationSerializer, TestimonialSerializer

from rest_framework import status

   
@api_view(['GET'])
def getCountries(request):
    try:
        countries = Country.objects.all()
        serializer = CountrySerializer(countries, many=True)
        return Response(serializer.data)

    except Country.DoesNotExist:
        message = {'detail': 'No Country Found'}
        return Response(message)

@api_view(['GET'])
def getTestimonials(request,page):
    try:
        testimonials = Testimonial.objects.filter(page__name=page)[:5]
        serializer = TestimonialSerializer(testimonials, many=True)
        return Response(serializer.data)

    except Testimonial.DoesNotExist:
        message = {'detail': 'No Country Found'}
        return Response(message)

@api_view(['POST'])
def createAbroadApplication(request):
    data = request.data
    abrod_application = AbroadApplication.objects.create(
        first_name=data['first_name'],
        last_name=data['last_name'],
        email=data['email'], 
        mobile_number=data['mobile_number'],
        country=data['country']
    )

    serializer = AbroadApplicationSerializer(abrod_application, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getCountry(request, slug):
    try:
        countries = Country.objects.get(slug=slug)
        serializer = CountrySerializer(countries, many=False)
        return Response(serializer.data)

    except Country.DoesNotExist:
        message = {'detail': 'No Country Found'}
        return Response(message)