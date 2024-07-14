from django.urls import path
from base.views import course_views as views

urlpatterns = [
   path('popular', views.getPopularCourses , name='popular-course-list'), 
   path('faculties', views.getFaculties , name='faculty-list'), 
   path('send-application/', views.send_application_view, name='send_email'),
   path('application', views.sendApplicationMail , name='application-mail'),
   path('events/list', views.getEvents , name='event-list'), 
   path('studentVerification/<str:nic>', views.getVerifiedStudent, name='student-verification-details'), 
   path('send-sa/', views.send_sa_view, name='send_sa_email'),
   path('send-cu/', views.send_cu_view, name='send_cu_email'),
   path('dualqualification', views.getDualQualification , name='dual-qualification-list'),
   path('qualifications', views.getQualificationList , name='our-qualification-list'), 
   path('qualifications/<str:slug>', views.getQualification , name='our-qualification-deatils'),
   path('about', views.getAbout , name='about-details'),
   path('levels', views.getLevels , name='level-list'),
   path('createContact', views.createContact, name='contact-create'),
   path('dual/qualification', views.getDualQualification, name='dual-qualification-list'),
   path('<str:f>/<str:p>/<str:q>/<str:c>', views.getCourses, name='courses-filter-list'),
   path('dual/qualification/<str:dual>', views.getDualQualificationCourses, name='dual-qualification-course-list'),
   path('dual/qualification/courses/<str:slug>', views.getDualQualificationCourses, name='dual-qualification-course-details'),
   path('search/<str:search_query>', views.searchCourses, name='course-search'),
   path('faculty/<str:fslug>', views.getCoursesByFaculty , name='country-list-by-faculty'), 
   path('<str:slug>', views.getCourse, name='course-details'), 
   

]
