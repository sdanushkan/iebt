from rest_framework import serializers
from .models import Faculty, Level, QualificationApproval, Course, OurQualification, Contact, Country, FAQ, About, AbroadApplication, CountryCategory, Testimonial, DualQualificationCourse,Page, DualQualification, StudentVerification, Event, University

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'

class FacultyListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = ['name','slug']

class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = '__all__'

class LevelListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = ['name', 'slug', 'id']


class QualificationApprovalSerializer(serializers.ModelSerializer):
    class Meta:
        model = QualificationApproval
        fields = '__all__'   


class OurQualificationSerializer(serializers.ModelSerializer):
    courses = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = OurQualification
        fields = '__all__'  

    def get_courses(self, obj):
        courses = obj.course_set.all().order_by('programe__id') 
        serializer = CourseListSerializer(courses, many=True)
        return serializer.data 

class OurQualificationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurQualification
        fields = ['name', 'slug', 'image', 'courses_list']   


class CourseSerializer(serializers.ModelSerializer):
    faculty = FacultySerializer()
    qualification = OurQualificationSerializer()
    programe = LevelSerializer()
    # units = serializers.SerializerMethodField(read_only=True)
    # units = serializers.SerializerMethodField(read_only=True)
    # course_requirments = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Course
        fields = '__all__'   
    
    # def get_units(self, obj):
    #     units = obj.unit_set.all()
    #     serializer = UnitSerializer(units, many=True)
    #     return serializer.data 
    
    # def get_course_requirments(self, obj):
    #     course_requirments = obj.courserequirment_set.all()
    #     serializer = CourseRequirmentSerializer(course_requirments, many=True)
    #     return serializer.data

class CourseListSerializer(serializers.ModelSerializer):
    faculty = FacultyListSerializer()
    qualification = OurQualificationListSerializer()
    programe = LevelListSerializer()
    # units = serializers.SerializerMethodField(read_only=True)
    # units = serializers.SerializerMethodField(read_only=True)
    # course_requirments = serializers.SerializerMethodField(read_only=True)
    
    class Meta: 
        model = Course
        fields = '__all__' 

class CourseNameSerializer(serializers.ModelSerializer):
    # faculty = FacultySerializer()
    # qualification = OurQualificationSerializer()
    # programe = LevelSerializer()
    # units = serializers.SerializerMethodField(read_only=True)
    # units = serializers.SerializerMethodField(read_only=True)
    # course_requirments = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Course
        fields = ['name','id' ]

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'  

class CountryCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CountryCategory
        fields = '__all__'    

class CountrySerializer(serializers.ModelSerializer):
    faqs = serializers.SerializerMethodField(read_only=True)
    category = CountryCategorySerializer()
    class Meta:
        model = Country
        fields = '__all__' 
 
    def get_faqs(self, obj):
        faqs = obj.faq_set.all()
        serializer = FAQSerializer(faqs, many=True)
        return serializer.data 

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__' 

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = '__all__'  

class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = '__all__'  

class TestimonialSerializer(serializers.ModelSerializer): 
    course = CourseNameSerializer() 
    page = PageSerializer()
    university = UniversitySerializer()
    class Meta:
        model = Testimonial
        fields = '__all__'  

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'    

class AbroadApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AbroadApplication
        fields = '__all__'    


# class CourseRequirmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CourseRequirment
#         fields = '__all__' 

class DualQualificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = DualQualification
        fields = '__all__'

class DualQualificationCourseSerializer(serializers.ModelSerializer):
    dual_qualification = DualQualificationSerializer() 
    course = CourseSerializer() 
    class Meta:
        model = DualQualificationCourse
        fields = '__all__'


class StudentVerificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentVerification
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
