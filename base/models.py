from django.db import models
from django.urls import reverse
from django.utils.text import slugify

# Create your models here.
class Faculty(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    slug = models.SlugField(blank=True, null=True, unique=True)
    image = models.ImageField(null=True, blank=True, default='/faculty/placeholder.png')
    description = models.CharField(max_length=2000, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Faculty'
        verbose_name_plural = 'Faculties'

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs )
    
class Level(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    slug = models.SlugField(blank=True, null=True, unique=True)
    offers = models.CharField(max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs )
    
class QualificationApproval(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class OurQualification(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    slug = models.SlugField(blank=True, null=True, unique=True)
    image = models.ImageField(null=True, blank=True, default='/OurQualification/placeholder.png')
    discription = models.CharField(max_length=2000, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs )

class Course(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    slug = models.SlugField(blank=True, null=True)
    faculty = models.ForeignKey(Faculty, on_delete=models.SET_NULL, null=True)  
    image = models.ImageField(null=True, blank=True, default='/course/placeholder.png')  
    course_credit = models.CharField(max_length=200, null=True, blank=True)
    qualification = models.ForeignKey(OurQualification, on_delete=models.SET_NULL, null=True)    
    class_on = models.CharField(max_length=200, null=True, blank=True)
    programe = models.ForeignKey(Level, on_delete=models.SET_NULL, null=True)
    overview = models.CharField(max_length=2000, null=True, blank=True)
    duration = models.CharField(max_length=20, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    def get_url(self):
        return reverse('product_detail', args=[self.category.slug, self.id])
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs )
    
    # def faculty(self):
    #     reviews = Faculty.objects.filter(Course=self, status=True).aggregate(count=Count('id'))
    #     count = 0 
    #     if reviews['count'] is not None:
    #         count = int(reviews['count'])
    #     return count

class CourseRequirment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True)    
    requirement = models.CharField(max_length=2000, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.course.name 
 
class Unit(models.Model):
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True)    
    level = models.ForeignKey(Level, on_delete=models.SET_NULL, null=True)  
    name = models.CharField(max_length=2000, null=True, blank=True)  
    credit_count = models.CharField(max_length=200, null=True, blank=True)  
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.course.name
    
class Contact(models.Model):
    name = models.CharField(max_length=2000, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    subject = models.CharField(max_length=2000, null=True, blank=True)
    phone_number = models.CharField(max_length=2000, null=True, blank=True)
    message = models.CharField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.name
    
class Country(models.Model):
    name = models.CharField(max_length=2000, null=True, blank=True)
    slug = models.SlugField(blank=True, null=True, unique=True)
    image = models.ImageField(null=True, blank=True, default='/country/image/placeholder.png')
    flag = models.ImageField(null=True, blank=True, default='/country/flag/placeholder.png')
    visa_reqrequirementi = models.CharField(max_length=2000, null=True, blank=True)
    discription = models.CharField(max_length=2000, null=True, blank=True)
    details_and_scholarship = models.CharField(max_length=2000, null=True, blank=True)
    job_and_proposal = models.CharField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Country'
        verbose_name_plural = 'Countries'

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs )
    
class FAQ(models.Model):
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)
    quation = models.ImageField(null=True, blank=True, default='/country/flag/placeholder.png')
    answer = models.CharField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.country
    
    class Meta:
        verbose_name = 'FAQ'
        verbose_name_plural = 'FAQ'
    
class About(models.Model):
    our_story = models.CharField(max_length=2000, null=True, blank=True)
    mission = models.CharField(max_length=2000, null=True, blank=True)
    vision = models.CharField(max_length=2000, null=True, blank=True)
    values = models.CharField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.vision
    
class AbroadApplication(models.Model):
    first_name = models.CharField(max_length=2000, null=True, blank=True)
    last_name = models.CharField(max_length=2000, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    mobile_number = models.CharField(max_length=2000, null=True, blank=True)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.email
    
