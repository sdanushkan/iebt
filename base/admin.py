from django.contrib import admin
from .models import Faculty, Course, Level, QualificationApproval, OurQualification, Country, Contact, FAQ, About, AbroadApplication , CountryCategory, Testimonial, Page, University, DualQualificationCourse, DualQualification, StudentVerification, Event
import admin_thumbnails

# Register your models here.

# @admin_thumbnails.thumbnail('level','name')
# class UnitInline(admin.TabularInline):
#     model = Unit
#     extra = 1

# @admin_thumbnails.thumbnail('requirement')
# class CourseRequirmentInline(admin.TabularInline):
#     model = CourseRequirment
#     extra = 1


@admin_thumbnails.thumbnail('question', 'answer')
class FAQInline(admin.TabularInline):
    model = FAQ
    extra = 1

# class CourseAdmin(admin.ModelAdmin):
#     # inlines = [UnitInline , CourseRequirmentInline]
#     search_fields= [ 'faculty', 'programe', 'qualification']
#     list_filter=[ 'faculty', 'programe', 'qualification']
#     list_display=['name', 'faculty', 'programe', 'qualification', 'ebrowcher',  'show_in_header','show_in_faculty','show_in_qualification', 'show_in_footer']
#     list_editable = [ 'faculty', 'programe', 'qualification', 'ebrowcher',  'show_in_header','show_in_faculty','show_in_qualification', 'show_in_footer']

class CountryAdmin(admin.ModelAdmin):
    inlines = [FAQInline] 
    
admin.site.register(Page)
admin.site.register(Faculty)   
admin.site.register(Level)
admin.site.register(OurQualification)
admin.site.register(Course,  
                    # CourseAdmin
                    
                    )

admin.site.register(DualQualification)

admin.site.register(DualQualificationCourse)

admin.site.register(StudentVerification)

admin.site.register(Event)

# admin.site.register(CourseQualification)

# admin.site.register(Unit)
admin.site.register(Country)
admin.site.register(CountryCategory)

admin.site.register(Contact)
admin.site.register(FAQ)
admin.site.register(About)
admin.site.register(AbroadApplication)

admin.site.register(University)
admin.site.register(Testimonial)