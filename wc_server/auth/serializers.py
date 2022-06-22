from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer as _TokenObtainPairSerializer
from rest_framework_simplejwt.serializers import TokenVerifySerializer as _TokenVerifySerializer




class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "first_name", "last_name", "email")


class TokenObtainPairSerializer(_TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)
        user_serializer = UserSerializer(self.user)
        # TODO: create model "UserProfile" and change data["user"] to user_profile instance
        data["user"] = user_serializer.data
        return data


class TokenVerifySerializer(_TokenVerifySerializer):

    def validate(self, attrs):
        response = super().validate(attrs)
        if response == {}:
            response["success"] = True
        return response
