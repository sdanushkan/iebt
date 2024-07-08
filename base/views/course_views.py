from django.shortcuts import render
from datetime import timedelta, datetime

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Course, Faculty,Country, About, Level, Contact, DualQualificationCourse, OurQualification, DualQualification
from base.serializers import CourseSerializer, FacultySerializer, CountrySerializer, AboutSerializer, LevelSerializer, ContactSerializer, DualQualificationCourseSerializer, CourseListSerializer, OurQualificationSerializer, DualQualificationSerializer, OurQualificationListSerializer

from rest_framework import status

@api_view(['GET'])
def getCourses(request):
    try:
        course = Course.objects.all().order_by('programe__id')
        serializer = CourseListSerializer(course, many=True)
        return Response(serializer.data)

    except Course.DoesNotExist:
        message = {'detail': 'No Country Found'}
        return Response(message)
    
@api_view(['GET'])
def getPopularCourses(request):
    try:
        course = Course.objects.filter(popular=True).order_by('programe__id')
        serializer = CourseListSerializer(course, many=True)
        return Response(serializer.data)

    except Course.DoesNotExist:
        message = {'detail': 'No Country Found'}
        return Response(message)

@api_view(['GET'])
def getCoursesByFaculty(request,fslug):
    try:
        course = Course.objects.filter(faculty__slug=fslug).order_by('programe__id')
        serializer = CourseSerializer(course, many=True)
        return Response(serializer.data)

    except Course.DoesNotExist:
        message = {'detail': 'No Country Found'}
        return Response(message)


@api_view(['GET'])
def getCourse(request, slug):
    try:
        course = Course.objects.get(slug=slug)
        serializer = CourseSerializer(course, many=False)
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
def getQualification(request, slug):
    try:
        about = OurQualification.objects.get(slug=slug)
        serializer = OurQualificationSerializer(about, many=False)
        return Response(serializer.data)

    except OurQualification.DoesNotExist:
        message = {'detail': 'No Qualification Found'}
        return Response(message)
    
@api_view(['GET'])
def getQualificationList(request):
    try:
        about = OurQualification.objects.all()
        serializer = OurQualificationListSerializer(about, many=True)
        return Response(serializer.data)

    except OurQualification.DoesNotExist:
        message = {'detail': 'No Qualification Found'}
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

@api_view(['GET'])
def getDualQualification(request):
    try:
        levels = DualQualification.objects.all()
        serializer = DualQualificationSerializer(levels, many=True)
        return Response(serializer.data) 

    except Level.DoesNotExist:
        message = {'detail': 'No Levels Found'}
        return Response(message)

@api_view(['GET'])
def getDualQualificationCourses(request, dual): 
    try:
        levels = DualQualificationCourse.objects.filter(dual_qualification__slug = dual)
        serializer = DualQualificationCourseSerializer(levels, many=True)
        return Response(serializer.data) 

    except Level.DoesNotExist:
        message = {'detail': 'No Levels Found'}
        return Response(message)

@api_view(['GET'])
def getDualQualificationCourse(request, name):
    try:
        levels = DualQualificationCourse.objects.get(name = name)
        serializer = DualQualificationCourseSerializer(levels, many=False)
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
    

