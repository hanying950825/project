SET NAMES UTF8;
DROP DATABASE IF EXISTS 163music;
CREATE DATABASE 163music CHARSET=UTF8;
USE 163music;

#用户信息列表
CREATE TABLE user_list(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),        #头像图片路径
  gender INT,                 #性别  0-女  1-男
  upresent VARCHAR(128)       #个人介绍
);

#歌曲详细列表
CREATE TABLE sing_list(
  sid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),
  stime VARCHAR(12),          #歌曲时长
  image VARCHAR(128),         #歌曲图片
  singer VARCHAR(64),         #歌手
  album VARCHAR(128),         #专辑名称
  mv INT,                     #是否有MV 有-1 无-0
  upresent VARCHAR(128),      #个人介绍
  singPlays INT               #播放次数
);

#轮播广告
CREATE TABLE banner_list(
  bid INT PRIMARY KEY AUTO_INCREMENT,
  btitle VARCHAR(64),
  src VARCHAR(128),
  pic VARCHAR(128)            #图片路径
);

#主播电台节目
CREATE TABLE radio_station(
  radioId INT PRIMARY KEY AUTO_INCREMENT,
  radioTitle VARCHAR(128),
  radioName VARCHAR(32),      #主播昵称
  radioTime VARCHAR(12),      #播放时长
  radioImage VARCHAR(128),    #歌曲图片
  album VARCHAR(128),         #专辑名称
  mv INT,                     #是否有MV 有-1 无-0
  upresent VARCHAR(128),      #个人介绍
  singPlays INT               #播放次数
);

#歌手列表
CREATE TABLE singer_list(
  singerId INT PRIMARY KEY AUTO_INCREMENT,
  singer VARCHAR(128),
  homepage VARCHAR(128),      #个人主页地址
  singerImage VARCHAR(128)    #歌手图片
);
