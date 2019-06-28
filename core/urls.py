from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/v1/', include('trading.urls'), name="trading"),
    path('', include('accounts.urls')),
    path('admin/', admin.site.urls),
]
