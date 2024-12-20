from django.shortcuts import render
from datetime import timedelta, datetime
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Course, Faculty, Country, Level, DualQualificationCourse, OurQualification, DualQualification, Event, StudentVerification, FAQType, FAQ, DualQualificaion
from base.serializers import CourseSerializer, FacultySerializer, CountrySerializer, LevelSerializer, DualQualificationCourseSerializer, CourseListSerializer, OurQualificationSerializer, FAQTypeSerializer, FAQSerializer, DualQualificationSerializer, OurQualificationListSerializer, EventSerializer, StudentVerificationSerializer
from django.shortcuts import render
from rest_framework import status
from django.db.models import Q

# views.py



from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.http import HttpResponse
from django.conf import settings


@api_view(['POST'])
def send_application_view(request):
    subject = ('Student Application')
    message = ('Default Message')

    data = request.data

    html_content = render_to_string('email_template.html', {
        'subject': subject, 
        'message': message,
        'sex':data['sex'],

        'faculty':data['faculty'],
        'course':data['course'],
        
        'fullName': data['fullName'],
        'fName': data['fName'],
        'lName': data['lName'],
        'Number': data['Number'],
        'NIC': data['NIC'],
        'Email': data['Email'],
        'DOB': data['DOB'],
        'Status': data['Status'],
        'Dependents': data['Dependents'],
        'funds': data['funds'],

        'GSEOLLSelected': data['GSEOLLSelected'],
        'GSEOLLSelectedO': data['GSEOLLSelectedO'],

        'OLA1Y': data['OLA1Y'],
        

        'OLS1A1': data['OLS1A1'],
        'OLS1A1G': data['OLS1A1G'],

        'OLS2A1': data['OLS2A1'],
        'OLS2A1G': data['OLS2A1G'],

        'OLS3A1': data['OLS3A1'],
        'OLS3A1G': data['OLS3A1G'],

        'OLS4A1': data['OLS4A1'],
        'OLS4A1G': data['OLS4A1G'],

        'OLS5A1': data['OLS5A1'],
        'OLS5A1G': data['OLS5A1G'],

        'OLS6A1': data['OLS6A1'],
        'OLS6A1G': data['OLS6A1G'],

        'OLS7A1': data['OLS7A1'],
        'OLS7A1G': data['OLS7A1G'],

        'OLS8A1': data['OLS8A1'],
        'OLS8A1G': data['OLS8A1G'],

        'OLS9A1': data['OLS9A1'],
        'OLS9A1G': data['OLS9A1G'],

        'OLA2Y': data['OLA2Y'],
        'OLS1A2': data['OLS1A2'],
        'OLS1A2G': data['OLS1A2G'],

        'OLA2Y2': data['OLA2Y2'],
        'OLS2A2': data['OLS2A2'],
        'OLS2A2G': data['OLS2A2G'],

        'OLA2Y3': data['OLA2Y3'],
        'OLS3A2': data['OLS3A2'],
        'OLS3A2G': data['OLS3A2G'],

        'OLA2Y4': data['OLA2Y4'],

        'OLS4A2': data['OLS4A2'],
        'OLS4A2G': data['OLS4A2G'],

        'OLA2Y5': data['OLA2Y5'],
        'OLS5A2': data['OLS5A2'],
        'OLS5A2G': data['OLS5A2G'],

        'OLA2Y6': data['OLA2Y6'],
        'OLS6A2': data['OLS6A2'],
        'OLS6A2G': data['OLS6A2G'],

        'OLA2Y7': data['OLA2Y7'],
        'OLS7A2': data['OLS7A2'],
        'OLS7A2G': data['OLS7A2G'],

        'OLA2Y8': data['OLA2Y8'],
        'OLS8A2': data['OLS8A2'],
        'OLS8A2G': data['OLS8A2G'],

        'OLA2Y9': data['OLA2Y9'],
        'OLS9A2': data['OLS9A2'],
        'OLS9A2G': data['OLS9A2G'],

        'ALA1Y': data['ALA1Y'],

        'ALS1A1': data['ALS1A1'],
        'ALS1A1G': data['ALS1A1G'],

        'ALS2A1': data['ALS2A1'],
        'ALS2A1G': data['ALS2A1G'],

        'ALS3A1': data['ALS3A1'],
        'ALS3A1G': data['ALS3A1G'],

        'ALS4A1': data['ALS4A1'],
        'ALS4A1G': data['ALS4A1G'],

        'ALA2Y': data['ALA2Y'],

        'ALS1A2': data['ALS1A2'],
        'ALS1A2G': data['ALS1A2G'],

        'ALS2A2': data['ALS2A2'],
        'ALS2A2G': data['ALS2A2G'],

        'ALS3A2': data['ALS3A2'],
        'ALS3A2G': data['ALS3A2G'],

        'ALS4A2': data['ALS4A2'],
        'ALS4A2G': data['ALS4A2G'],

        'HEQ1': data['HEQ1'],
        'HEQ1Y': data['HEQ1Y'],
        'HEQ1G': data['HEQ1G'],

        'HEQ2': data['HEQ2'],
        'HEQ2Y': data['HEQ2Y'],
        'HEQ2G': data['HEQ2G'],

        'HEQ3': data['HEQ3'],
        'HEQ3Y': data['HEQ3Y'],
        'HEQ3G': data['HEQ3G'],

        'HEQ4': data['HEQ4'],
        'HEQ4Y': data['HEQ4Y'],
        'HEQ4G': data['HEQ4G'],

        'HEQ5': data['HEQ5'],
        'HEQ5Y': data['HEQ5Y'],
        'HEQ5G': data['HEQ5G'],

        'OLE': data['OLE'],
        'OLEG': data['OLEG'],

        'AL': data['AL'],
        'ALG': data['ALG'],

        'IELTS': data['IELTS'],
        'IELTSG': data['IELTSG'],

        'company1': data['company1'],
        'year1': data['year1'],
        'position1': data['position1'],

        'company2': data['company2'],
        'year2': data['year2'],
        'position2': data['position2'],

        'company3': data['company3'],
        'year3': data['year3'],
        'position3': data['position3'],

        'c1': data['c1'],
        'c2': data['c2'],
        'c3': data['c3'],
        'c4': data['c4'],

        'i1': data['i1'],
        'i2': data['i2'],
        'i3': data['i3'],
        'i4': data['i4'],

    })

    text_content = 'This is an alternative plain text message for email clients that do not support HTML.'

    email = EmailMultiAlternatives(subject, text_content, settings.DEFAULT_FROM_EMAIL, ['enquiries@iebc.lk'])
    email.attach_alternative(html_content, "text/html")
    email.send()

    return HttpResponse('Email sent successfully.')

@api_view(['POST'])
def send_sa_view(request):
    subject = ('Study abroad Application')
    message = ('Default Message')

    data = request.data

    html_content = render_to_string('email_template_SA.html', {
        'subject': subject, 
        'message': message,
        'email': data['email'],
        'number': data['mNumber'],
        'YOS': data['YOS'],
        'PS': data['PS'],
        'SI': data['SI']
    })

    text_content = 'This is an alternative plain text message for email clients that do not support HTML.'

    email = EmailMultiAlternatives(subject, text_content, settings.DEFAULT_FROM_EMAIL, ['enquiries@iebc.lk'])
    email.attach_alternative(html_content, "text/html")
    email.send()

    return HttpResponse('Email sent successfully.')

@api_view(['POST'])
def send_ba_view(request):
    subject = ('Study abroad Book appointment')
    message = ('Default Message')

    data = request.data

    html_content = render_to_string('email_template_BA.html', {
        'subject': subject, 
        'message': message,
        
        'email': data['email'],
        'name': data['name'],
        'mNumber': data['mNumber'],
        'date': data['date'],
        'YOS': data['YOS'],
        'destination': data['destination'],
        'SI': data['SI'], 

    })

    text_content = 'This is an alternative plain text message for email clients that do not support HTML.'

    email = EmailMultiAlternatives(subject, text_content, settings.DEFAULT_FROM_EMAIL, ['enquiries@iebc.lk'])
    email.attach_alternative(html_content, "text/html")
    email.send()

    return HttpResponse('Email sent successfully.')

@api_view(['POST'])
def send_ca_view(request):
    subject = ('Country Application')
    message = ('Default Message')

    data = request.data

    html_content = render_to_string('email_template_CA.html', {
        'subject': subject, 
        'message': message,
        
        'email': data['email'],
        'name': data['name'],
        'mNumber': data['mNumber'],
        'country': data['country'],
        'intake': data['intake'],
        

    })

    text_content = 'This is an alternative plain text message for email clients that do not support HTML.'

    email = EmailMultiAlternatives(subject, text_content, settings.DEFAULT_FROM_EMAIL, ['enquiries@iebc.lk'])
    email.attach_alternative(html_content, "text/html")
    email.send()

    return HttpResponse('Email sent successfully.')


@api_view(['POST'])
def send_cu_view(request):
    subject = ('Contact us Application')
    message = ('Default Message')

    data = request.data

    html_content = render_to_string('email_template_CU.html', {
        'subject': subject, 
        'message': message,
        
        'email': data['email'],
        'name': data['name'],
        'mNumber': data['mNumber'],
        'subject': data['subject'],
        'discription': data['discription'],
        

    })

    text_content = 'This is an alternative plain text message for email clients that do not support HTML.'

    email = EmailMultiAlternatives(subject, text_content, settings.DEFAULT_FROM_EMAIL, ['enquiries@iebc.lk'])
    email.attach_alternative(html_content, "text/html")
    email.send()

    return HttpResponse('Email sent successfully.')



@api_view(['GET'])
def getCourses(request, f, p, q, c):
    try:
        if DualQualificaion.objects.filter(name='yes').exists():
            course = Course.objects.all().order_by('programme__id')
            
            filters = Q()
            
            if f != 'faculties': 
                filters &= Q(faculty__slug=f)
                
            if p != 'programes': 
                filters &= Q(programme__slug=p)
                
            if q != 'qualifications': 
                filters &= Q(qualification__slug=q)
                
            if c != 'credits': 
                filters &= Q(course_credit=c)
            
            # Apply the combined filters to the queryset
            course = course.filter(filters)
            
            # Check if any courses are found
            if not course.exists():
                return Response([{'detail': 'No Courses Found'}], status=404)
                
            serializer = CourseListSerializer(course, many=True)
            return Response(serializer.data)
        else:
            return Response({'detail': 'No courses found'}, status=404)
    except Course.DoesNotExist:
        return Response({'detail': 'No Courses Found'}, status=404)
    
@api_view(['GET'])
def getPopularCourses(request):
    try:
        course = Course.objects.filter(popular=True).order_by('programme__id')
        serializer = CourseListSerializer(course, many=True)
        return Response(serializer.data) 

    except Course.DoesNotExist:
        message = {'detail': 'No Country Found'}
        return Response(message)
    

@api_view(['GET'])
def sendApplicationMail(request):
    subject = 'Welcome to Our Service'
    from_email = settings.DEFAULT_FROM_EMAIL
    to = ['appledanushkan31@gmail']

    # Render email content
    text_content = render_to_string('email/example_email.txt')
    html_content = render_to_string('email/example_email.html')

    # Create email
    msg = EmailMultiAlternatives(subject, text_content, from_email, to)
    msg.attach_alternative(html_content, "text/html")

    # Send email
    msg.send()


@api_view(['GET'])
def getCoursesByFaculty(request,fslug):
    try:
        course = Course.objects.filter(faculty__slug=fslug).order_by('programme__id')
        serializer = CourseSerializer(course, many=True)
        return Response(serializer.data)

    except Course.DoesNotExist:
        message = {'detail': 'No Country Found'}
        return Response(message)


@api_view(['GET'])
def getCourse(request, slug):
    try:
        if DualQualificaion.objects.filter(name='yes').exists():
            try:
                course = Course.objects.get(slug=slug)
                serializer = CourseSerializer(course, many=False)
                return Response(serializer.data)
            except Course.DoesNotExist: 
                message = {'detail': 'No Course Found'}
                return Response(message, status=404)
        else:
            return Response({'detail': 'No Dual course found'}, status=404)
    except DualQualificaion.DoesNotExist:
        return Response({'detail': 'No Dual course found'}, status=404)
    
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
    
@api_view(['PUT'])
def getQualificaionList(request):
    try:
        if DualQualificaion.objects.filter(name='yes').exists(): 
            qualification = DualQualificaion.objects.get(name='yes')
            qualification.name = 'no'
            qualification.save()
        else:
            qualification = DualQualificaion.objects.get(name='no') 
            qualification.name = 'yes'
            qualification.save()

        return Response('no courses')

    except DualQualificaion.DoesNotExist:
        return Response({'detail': 'Dual Qualification not found'}, status=404)

@api_view(['GET'])
def getLevels(request):
    try:
        levels = Level.objects.all().order_by("id")
        serializer = LevelSerializer(levels, many=True)
        return Response(serializer.data)

    except Level.DoesNotExist:
        message = {'detail': 'No Levels Found'}
        return Response(message)
    
# @api_view(['GET'])
# def getLevels(request):
#     try:
#         levels = Level.objects.all()
#         serializer = LevelSerializer(levels, many=True)
#         return Response(serializer.data)

#     except Level.DoesNotExist:
#         message = {'detail': 'No Levels Found'}
#         return Response(message)

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
def getDualQualificationCourse(request, slug):
    try:
        levels = DualQualificationCourse.objects.get(slug = slug)
        serializer = DualQualificationCourseSerializer(levels, many=False)
        return Response(serializer.data) 

    except Level.DoesNotExist:
        message = {'detail': 'No courses Found'}
        return Response(message)    

@api_view(['GET'])
def getEvents(request, page):
    try:
        course = Event.objects.filter(page__slug=page)
        serializer = EventSerializer(course, many=True)
        return Response(serializer.data)

    except Event.DoesNotExist:
        message = {'detail': 'No Events Found'}
        return Response(message)
     
@api_view(['GET'])
def getVerifiedStudent(request, nic):
    try:
        course = StudentVerification.objects.get(nic=nic)
        serializer = StudentVerificationSerializer(course, many=False)
        return Response(serializer.data)

    except StudentVerification.DoesNotExist:
        message = {'detail': 'No Student Found'}
        return Response(message)
    