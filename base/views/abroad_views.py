from django.shortcuts import render
from datetime import timedelta, datetime

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Country, Testimonial
from base.serializers import CountrySerializer, TestimonialSerializer

from rest_framework import status

   
@api_view(['GET'])
def getCountries(request,cat):
    try:
        countries = Country.objects.filter(category__slug=cat)
        serializer = CountrySerializer(countries, many=True)
        return Response(serializer.data)

    except Country.DoesNotExist:
        message = {'detail': 'No Country Found'}
        return Response(message)


@api_view(['GET'])
def getTestimonials(request,page):
    try:
        testimonials = Testimonial.objects.filter(page__slug=page)[:5]
        serializer = TestimonialSerializer(testimonials, many=True)
        return Response(serializer.data)

    except Testimonial.DoesNotExist:
        message = {'detail': 'No Country Found'}
        return Response(message)


@api_view(['GET'])
def getCountry(request, slug):
    try:
        countries = Country.objects.get(slug=slug)
        serializer = CountrySerializer(countries, many=False)
        return Response(serializer.data)

    except Country.DoesNotExist:
        message = {'detail': 'No Country Found'}
        return Response(message)