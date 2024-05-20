from django.urls import path
from base.views import course_views as views

urlpatterns = [
   path('', views.getCourses , name='country-list'),
   path('faculties', views.getFaculties , name='faculty-list'),
   path('about', views.getAbout , name='about-details'),
   path('levels', views.getLevels , name='level-list'),
   path('createContact', views.createContact, name='contact-create')
]
