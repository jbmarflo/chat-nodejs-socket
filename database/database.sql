DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id varchar(40) NOT NULL primary key,
  username varchar(30) NOT NULL unique,
  password varchar(100) NOT NULL,
  email varchar(30) NOT NULL,
  name varchar(20) NOT NULL,
  lastname varchar(20) NOT NULL,
  created_at  timestamp default CURRENT_TIMESTAMP null,
  state char(1) default '1'
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS group;
CREATE TABLE group (
  id varchar(40) NOT NULL primary key,
  name varchar(20) NOT NULL,
  limitUser tinyiny(3) unsigned NOT NULL,
  created_at  timestamp default CURRENT_TIMESTAMP null,
  state char(1) default '1'
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS message;
CREATE TABLE message (
  id varchar(40) NOT NULL primary key,
  userId varchar(40) NOT NULL,
  groupId varchar(40) NOT NULL,
  type enum('file', 'text') default 'text' not null,
  created_at  timestamp default CURRENT_TIMESTAMP null,
  state char(1) default '1',
  FOREIGN KEY (userId)
        REFERENCES user(id)
        ON DELETE CASCADE,
  FOREIGN KEY (groupId)
        REFERENCES group(id)
        ON DELETE CASCADE,
  INDEX(type)           
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS userGroup;
CREATE TABLE userGroup (
  userId varchar(40) NOT NULL,
  groupId varchar(20) NOT NULL,
  FOREIGN KEY (userId)
        REFERENCES user(id)
        ON DELETE CASCADE,
  FOREIGN KEY (groupId)
        REFERENCES group(id)
        ON DELETE CASCADE      

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
