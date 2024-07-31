from rest_framework import serializers
from .models import Faculty, Level, Course, OurQualification, Country, FAQType, FAQ, CountryCategory, Testimonial, DualQualificationCourse,Page, DualQualification, StudentVerification, Event, University, Card

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'

class FacultyListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = ['name','slug', 'id']

class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = '__all__'

class LevelListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = ['name', 'slug', 'id']

class OurQualificationSerializer(serializers.ModelSerializer):
    courses = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = OurQualification
        fields = '__all__'  

    def get_courses(self, obj):
        courses = obj.course_set.all().order_by('programme__id') 
        serializer = CourseListSerializer(courses, many=True)
        return serializer.data 

class OurQualificationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurQualification
        fields = ['name', 'slug', 'image', 'courses_list']   

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'   


class CourseSerializer(serializers.ModelSerializer):
    faculty = FacultySerializer()
    qualification = OurQualificationSerializer()
    programme = LevelSerializer()
    card = CardSerializer()
    # units = serializers.SerializerMethodField(read_only=True)
    # course_requirments = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Course
        fields = '__all__'   
    

    
    # def get_course_requirments(self, obj):
    #     course_requirments = obj.courserequirment_set.all()
    #     serializer = CourseRequirmentSerializer(course_requirments, many=True)
    #     return serializer.data

class CourseListSerializer(serializers.ModelSerializer):
    faculty = FacultyListSerializer()
    qualification = OurQualificationListSerializer()
    programme = LevelListSerializer()
    # units = serializers.SerializerMethodField(read_only=True)
    # units = serializers.SerializerMethodField(read_only=True)
    # course_requirments = serializers.SerializerMethodField(read_only=True)
    
    class Meta: 
        model = Course
        fields =   '__all__' 
     
class CourseNameSerializer(serializers.ModelSerializer):
    # faculty = FacultySerializer()
    # qualification = OurQualificationSerializer()
    # programme = LevelSerializer()
    # units = serializers.SerializerMethodField(read_only=True)
    # units = serializers.SerializerMethodField(read_only=True)
    # course_requirments = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Course
        fields = ['name','id' ]
  

class CountryCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CountryCategory
        fields = '__all__'    

class CountrySerializer(serializers.ModelSerializer):
    category = CountryCategorySerializer()
    class Meta:
        model = Country
        fields = '__all__'

class FAQTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQType
        fields = '__all__'

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

# class CourseRequirmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CourseRequirment
#         fields = '__all__' 

class DualQualificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = DualQualification
        fields = '__all__'

class DualQualificationCourseSerializer(serializers.ModelSerializer):
    faculty = FacultySerializer()
    qualification = OurQualificationSerializer()
    programme = LevelSerializer()
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
