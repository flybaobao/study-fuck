## 安装
```
    npm init -y // 自动建立版本
    npm install vue vue-router axios bootstrap

    var cityList = {:json_encode(config('bank_city'))};
        var selProvs= document.getElementsByName("provs")[0];
        var html = '<option value="">请选择省份</option>';
        $.each(cityList,function(index,value){
            html += '<option value="110000" hassubinfo="true">' + value.province + '</option>';
        });
        selProvs.innerHTML = html;
        var selCts= document.getElementsByName("cities")[0];
        selProvs.onchange = function(){
            var i = this.selectedIndex;
            if (i > 0) {
                var cities = cityList[i-1].cities;
                html = '<option value="">请选择市区</option>';
                $.each(cities,function(index,value){
                    console.log(value);
                    html += '<option value="110000" hassubinfo="true">' + value.name + '</option>';
                });
                selCts.innerHTML = html;
            }
        };

```