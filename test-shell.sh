# 读取命令量的输入 -p 明文 -ps
read -p "enter name:" name
# if 的条件需要使用 中括号扩起来 且首尾都需要有空格
if [ $name == 'xq' ]
then
  # 单引号会把引号内的所有内容当作字符串输出
  echo 'welcome xq'
else
  # 双引号会解析里面的变量 类似于js中的模版字符
  echo "you name is ${name}"
fi
read -p "enter age:" age

if [ $name == xq ]
then
  # 变量赋值时等号两边不允许有空格
  age=18;
fi

echo you have entered $name, $age