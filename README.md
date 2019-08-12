![PIC](https://github.com/Hanwn/keypad-exercise/blob/master/html_css_html/pic/keypad.png?raw=true)

### 学习pyqt写的一个小项目

1. 环境：python3.5 + PyQt4 + Windows10

list to do:
- [x] 增加自定义按键练习；
- [x] 增加自定义时间长度；



`鉴于有的人电脑上没有安装python开发的依赖环境，所以上面的项目开发实用性并不高，所以加入了前端的页面，使之在浏览器中就可以运行`

### 前端小键盘练习

**使用方法**

![](https://github.com/Hanwn/keypad-exercise/blob/master/html_css_html/pic/main.PNG?raw=true)

1. 在min输入栏输入练习的时间长度，在count栏输入本次练习的数量，Number栏输入本次练习的键位；

2. 在第一步完成后，点击start按钮，即可进入练习；

3. 可以点击finish按键进行终止本次练习，stop按钮暂停本次练习。

4. 在时间结束或者数量练习结束，会在页面的下方显示本次的正确情况。

   ![](https://github.com/Hanwn/keypad-exercise/blob/master/html_css_html/pic/chart.PNG?raw=true)

list to do:

- [ ] 实现进度条效果；
- [x] 使用echarts对历史成绩进程可视化，方便用户查看历史成绩；
- [ ] 使用jQuery对js部分进行重构；



- 2019.7.14更新：
  - 更新项目，使之能够在网页中运行；
- 2019.7.15更新：
  - 完成了基本功能，包括自定义测试样例、自定义训练时间、自定义训练任务；

- 2019.8.13更新：
  - 完成echarts可视化部分，用户可以通过饼图得知本次练习的正确率；