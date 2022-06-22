from django.db import models


class GiveAway(models.Model):
    link = models.CharField(max_length=255, blank=False)
    project_name = models.CharField(max_length=100, blank=False)
    image = models.ImageField(upload_to=f"giveaways")