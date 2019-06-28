from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone


class Currency(models.Model):
    name = models.CharField(max_length=32)
    code = models.CharField(max_length=10)

    def __str__(self):
        return self.code

    class Meta:
        verbose_name = "Currency"
        verbose_name_plural = "Currencies"


class Buy(models.Model):
    trans_date = models.DateTimeField(default=timezone.now)
    amount = models.DecimalField(
        max_digits=20, decimal_places=8, null=True, blank=True)
    ask_price = models.DecimalField(
        max_digits=20, decimal_places=8, null=True, blank=True)
    total_price = models.DecimalField(
        max_digits=20, decimal_places=8, null=True, blank=True)
    currency = models.ForeignKey(
        Currency, on_delete=models.SET_NULL, null=True, blank=True)
    user = models.ForeignKey(User, related_name="buy",
                             on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = "Trading - Buy"
        verbose_name_plural = "Trading - Buy"

    def __str__(self):
        return f"{self.id}"


class Sell(models.Model):
    trans_date = models.DateTimeField(default=timezone.now)
    amount = models.DecimalField(
        max_digits=20, decimal_places=8, null=True, blank=True)
    bid_price = models.DecimalField(
        max_digits=20, decimal_places=8, null=True, blank=True)
    total_price = models.DecimalField(
        max_digits=20, decimal_places=8, null=True, blank=True)
    currency = models.ForeignKey(
        Currency, on_delete=models.SET_NULL, null=True, blank=True)
    user = models.ForeignKey(User, related_name="sell",
                             on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = "Trading - Sell"
        verbose_name_plural = "Trading - Sell"

    def __str__(self):
        return f"{self.id}"
