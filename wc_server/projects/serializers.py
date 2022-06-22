from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source="pk", read_only=True)

    class Meta:
        model = Project
        fields = ("id", "name", "description", "main_link", "discord_link", "twitter_link", "telegram_link")