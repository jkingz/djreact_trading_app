from django.contrib import admin
from trading.models import Buy, Sell, Currency


class CurrencyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'code',)


class BuyAdmin(admin.ModelAdmin):
    list_display = ('id', 'trans_date', 'ask_price',
                    'total_price', 'amount', 'currency',)


class SellAdmin(admin.ModelAdmin):
    list_display = ('id', 'trans_date', 'bid_price',
                    'total_price', 'amount', 'currency',)


admin.site.register(Buy, BuyAdmin)
admin.site.register(Sell, SellAdmin)
admin.site.register(Currency, CurrencyAdmin)
