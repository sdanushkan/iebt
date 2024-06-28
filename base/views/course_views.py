from django.shortcuts import render
from datetime import timedelta, datetime

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Course, Faculty,Country, About, Level, Contact
from base.serializers import CourseSerializer, FacultySerializer, CountrySerializer, AboutSerializer, LevelSerializer, ContactSerializer

from rest_framework import status

@api_view(['GET'])
def getCourses(request):
    try:
        course = Course.objects.all().order_by('qualification__order')
        serializer = CourseSerializer(course, many=True)
        return Response(serializer.data)

    except Course.DoesNotExist:
        message = {'detail': 'No Country Found'}
        return Response(message)
    
@api_view(['GET'])
def searchCourses(request, search_query):
    try:
        course = Course.objects.filter(name=search_query)
        serializer = CourseSerializer(course, many=True)
        return Response(serializer.data)

    except Course.DoesNotExist:
        message = {'detail': 'No Country Found'}
        return Response(message)

@api_view(['GET'])
def getFaculties(request):
    try:
        faculty = Faculty.objects.all()
        serializer = FacultySerializer(faculty, many=True)
        return Response(serializer.data)

    except Faculty.DoesNotExist:
        message = {'detail': 'No Faculty Found'}
        return Response(message)

@api_view(['GET'])
def getAbout(request):
    try:
        about = About.objects.all()
        serializer = AboutSerializer(about, many=True)
        return Response(serializer.data)

    except About.DoesNotExist:
        message = {'detail': 'No About Found'}
        return Response(message)
    
@api_view(['GET'])
def getLevels(request):
    try:
        levels = Level.objects.all().order_by('order')
        serializer = LevelSerializer(levels, many=True)
        return Response(serializer.data)

    except Level.DoesNotExist:
        message = {'detail': 'No Levels Found'}
        return Response(message)
    
@api_view(['GET'])
def getLevels(request):
    try:
        levels = Level.objects.all()
        serializer = LevelSerializer(levels, many=True)
        return Response(serializer.data)

    except Level.DoesNotExist:
        message = {'detail': 'No Levels Found'}
        return Response(message)
    
@api_view(['POST'])
def createContact(request):
    data = request.data
    contact = Contact.objects.create(
        name=data['name'],
        email=data['email'],
        phoneNumber=data['phoneNumber'], 
        subject=data['subject'],
        message=data['message']
    )

    serializer = ContactSerializer(contact, many=False)
    return Response(serializer.data)
    

