from django.shortcuts import render
from datetime import timedelta, datetime

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Country
from base.serializers import CountrySerializer

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