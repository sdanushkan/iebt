from django.contrib import admin
from .models import Faculty, Course, Level, QualificationApproval, OurQualification, Country, Contact, FAQ, About, AbroadApplication , CountryCategory, Testimonial
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
#     inlines = [UnitInline , CourseRequirmentInline]

class CountryAdmin(admin.ModelAdmin):
    inlines = [FAQInline] 


admin.site.register(Faculty)
admin.site.register(Course, 
                    # CourseAdmin
                    )
admin.site.register(Level)
# admin.site.register(CourseQualification)
admin.site.register(OurQualification)
# admin.site.register(Unit)
admin.site.register(Country)
admin.site.register(CountryCategory)
admin.site.register(Contact)
admin.site.register(FAQ)
admin.site.register(About)
admin.site.register(AbroadApplication)
admin.site.register(Testimonial)