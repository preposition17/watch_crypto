from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=False)

    main_link = models.CharField(max_length=255, blank=False)
    discord_link = models.CharField(max_length=255, blank=True)
    twitter_link = models.CharField(max_length=255, blank=True)
    telegram_link = models.CharField(max_length=255, blank=True)



    def __str__(self):
        return f"Project \"{self.name}\""
