from rest_framework import serializers
from .models import Faculty, Level, QualificationApproval, Course, OurQualification, Unit, Contact, Country, FAQ, About, AbroadApplication, CourseRequirment

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'

class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = '__all__'

class UnitSerializer(serializers.ModelSerializer):
    level = LevelSerializer()
    class Meta:
        model = Unit
        fields = '__all__'


class QualificationApprovalSerializer(serializers.ModelSerializer):
    class Meta:
        model = QualificationApproval
        fields = '__all__'   


class OurQualificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurQualification
        fields = '__all__'   


class CourseSerializer(serializers.ModelSerializer):
    faculty = FacultySerializer()
    qualification = OurQualificationSerializer()
    programe = LevelSerializer()
    # units = serializers.SerializerMethodField(read_only=True)
    units = serializers.SerializerMethodField(read_only=True)
    course_requirments = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Course
        fields = '__all__'   
    
    def get_units(self, obj):
        units = obj.unit_set.all()
        serializer = UnitSerializer(units, many=True)
        return serializer.data 
    
    def get_course_requirments(self, obj):
        course_requirments = obj.courserequirment_set.all()
        serializer = CourseRequirmentSerializer(course_requirments, many=True)
        return serializer.data



class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'    

class CountrySerializer(serializers.ModelSerializer):
    faqs = serializers.SerializerMethodField(read_only=True)
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

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'    

class AbroadApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AbroadApplication
        fields = '__all__'    


class CourseRequirmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseRequirment
        fields = '__all__' 
