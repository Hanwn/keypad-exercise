from PyQt4.QtGui import *
from PyQt4.QtCore import *
import sys
import random
import default
import matplotlib as plt


class Calculate(QMainWindow,QLineEdit,QWidget):
    def __init__(self):
        super().__init__()
        self.flag = 0
        self.timer = QBasicTimer()
        self.line1 = QTextEdit()
        self.line1.setFocusPolicy(Qt.NoFocus)
        # self.line1.resize(600,150)
        self.line2 = QLineEdit()
        # self.line2.resize(600,150)
        self.label = QLabel(self)
        self.pbar = QProgressBar(self)
        # self.pbar.resize(250,40)


        self.btn = QPushButton('开始',self)
        self.restart()
        self.result = self.get_result(0)
        self.setWindowFlags(Qt.FramelessWindowHint | Qt.Dialog)
        self.palette1 = QPalette()
        self.palette1.setColor(self.backgroundRole(), QColor(242,156,177))   # 设置背景颜色
        self.ui_init()



        tb = QToolButton(self)
        tb.setToolButtonStyle(Qt.ToolButtonTextBesideIcon)
        # tb.setArrowType(Qt.DownArrow)
        tb.setToolTip('选择适合你的练习方式')
        tb.setPopupMode(QToolButton.MenuButtonPopup)
        tb.setText('练习方式')
        tb.setAutoRaise(True)

        menu = QMenu(self)
        self.selfAct = QAction('自定义练习', self)
        self.defaultAct = QAction('默认练习', self)
        menu.addAction(self.selfAct)
        menu.addAction(self.defaultAct)
        menu.addSeparator()
        tb.setMenu(menu)
        self.selfAct.triggered.connect(self.on_click)
        self.defaultAct.triggered.connect(self.on_click)

    def ui_init(self):
        self.resize(600,200)
        self.center()
        widget = QWidget()

        vlayout = QVBoxLayout()#右边布局
        vlayout1 = QVBoxLayout()#左边边框布局
        hlayout = QHBoxLayout()#总布局
        hlayout1 = QHBoxLayout()#左边布局总
        hlayout2 = QHBoxLayout()#按钮布局

        restart_btn = QPushButton("重新开始",self)
        restart_btn.clicked.connect(self.restart)
        pic = QPushButton('成绩',self)
        pic.clicked.connect(self.score)
        quit = QPushButton("退出",self)
        quit.clicked.connect(self.quitClicked)
        self.btn.clicked.connect(self.onstart)
        self.btn.setFocusPolicy(Qt.NoFocus)

        vlayout.addWidget(self.line1)
        vlayout.addWidget(self.label)
        vlayout.addWidget(self.line2)

        hlayout2.addWidget(self.btn)
        hlayout2.addWidget(quit)
        hlayout2.addWidget(pic)
        hlayout2.addWidget(restart_btn)

        vlayout1.addWidget(self.pbar)
        vlayout1.addLayout(hlayout2)


        label1 = QLabel(self)
        label1.resize(10,200)
        label2 = QLabel(self)
        label2.resize(10,200)
        hlayout1.addWidget(label1)
        hlayout1.addLayout(vlayout1)
        hlayout1.addWidget(label2)

        hlayout.addLayout(hlayout1)
        hlayout.addLayout(vlayout)

        widget.setLayout(hlayout)
        self.setPalette(self.palette1)
        self.setCentralWidget(widget)

    def on_click(self):
        if self.sender() == self.selfAct:
            self.d = default.Demo()
            self.flag = 1
            self.d.dbtn.clicked.connect(self.get_text)
            self.d.dbtn1.clicked.connect(self.demo_close)

        elif self.sender() == self.defaultAct:
            self.flag = 0
            self.restart()
    
    def demo_close(self):
        self.d.close()

    def get_text(self):
        self.ncount = int(self.d.sp1.text())
        self.matrial = self.d.line.text()
        # print(self.matrial)
        self.result = self.get_result(1)
        self.len_time = int(self.d.sp2.text()) * 600
        # print(self.result)
        self.restart()
        self.d.close()


    def restart(self):
        self.count = 1
        self.rcount = 0
        self.ecount = 0
        if self.flag == 1:
            self.result = self.get_result(1)
        else:
            self.result = self.get_result(0)
            self.len_time = 6000
            self.ncount = 300
        self.step = 0
        self.timer.stop()
        self.btn.setText('开始')


    def center(self):
        qr = self.frameGeometry()
        cp = QDesktopWidget().availableGeometry().center()
        qr.moveCenter(cp)
        self.move(qr.topLeft())


    def onTextChanged(self,text):
        if len(text) % 7 == 6:
            inputnumber = self.line2.text()
            if inputnumber == '':
                pass
            else:
                try:
                    if(inputnumber == self.result[self.count - 1]):
                        self.rcount = self.rcount + 1
                        # print("right:{}".format(self.rcount))
                    else:
                        print('ok')
                        print(inputnumber)
                        self.ecount = self.ecount + 1
                        # print("error:{}".format(self.ecount))
                except Exception as e:
                    # print(e)
                    pass
                self.line2.setText('')
                try:
                    self.line1.setText("<font size=%s><B>%s</B></font>" %("15", "{}".format(self.result[self.count])))
                except Exception as e:
                    # print(e)
                    pass
                self.count = self.count + 1

    def get_result(self,flag):
        result = []
        if flag == 0:
            for j in range(0,300):
                s = ""
                for i in range(0,6):
                    s = s +str(random.randint(0,9))
                result.append(s)
        else:
            for i in range(0,self.ncount):
                s = ''
                for j in range(0,6):
                    s = s + str(random.choice(self.matrial))
                result.append(s)
        return result

    def onstart(self):
        try:
            self.line1.setText("<font size=%s><B>%s</B></font>" %("15", "{}".format(self.result[self.count - 1])))
        except Exception as e:
            pass
        self.line2.textChanged.connect(self.onTextChanged)
        self.line2.setValidator(QRegExpValidator(QRegExp("(\\d+)")))

        if self.timer.isActive():
            self.timer.stop()
            self.btn.setText('开始')
        else:
            self.timer.start(self.len_time,self)
            self.btn.setText('停止')

    def timerEvent(self,event):
        if(self.step >= self.len_time or self.ncount<self.count):
            self.timer.stop()
            self.btn.setText('完成')
            self.information()
            return
        self.step+=1
        self.pbar.setValue(self.step)

    def quitClicked(self):
        reply = QMessageBox.question(self, 'Warning','Are you sure to quit?', QMessageBox.Yes,QMessageBox.No)
        if reply == QMessageBox.Yes:
            quit()

    def score(self):
        pass

    def information(self):
        reply = QMessageBox.information(self,'你的成绩','正确：{},错误：{},正确率：{}%'.format(self.rcount,self.ecount,self.rcount/self.ncount * 100))


def main():
    app = QApplication(sys.argv)
    c = Calculate()
    c.show()
    # c.display()
    sys.exit(app.exec_())

if __name__ == '__main__':
    main()
