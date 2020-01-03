DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id varchar(40) NOT NULL primary key,
  username varchar(30) NOT NULL,
  password varchar(100) NOT NULL,
  email varchar(30) NOT NULL,
  name varchar(20) NOT NULL,
  lastname varchar(20) NOT NULL,
  created_at  timestamp default CURRENT_TIMESTAMP null,
  state char(1) default '1'

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS groups;
CREATE TABLE groups (
  id varchar(40) NOT NULL primary key,
  name varchar(20) NOT NULL,
  limit_user tinyint(3) unsigned NOT NULL,
  created_at  timestamp default CURRENT_TIMESTAMP null,
  state char(1) default '1'
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS message;
CREATE TABLE message (
  id varchar(40) NOT NULL primary key,
  user_id varchar(40) NOT NULL,
  groups_id varchar(40) NOT NULL,
  type enum('file', 'text') default 'text' not null,
  message text not null,
  created_at  timestamp default CURRENT_TIMESTAMP null,
  state char(1) default '1',
  FOREIGN KEY (user_id)
        REFERENCES user(id)
        ON DELETE CASCADE,
  FOREIGN KEY (groups_id)
        REFERENCES groups(id)
        ON DELETE CASCADE,
  INDEX(type)           
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS user_group;
CREATE TABLE user_group (
  user_id varchar(40) NOT NULL,
  groups_id varchar(20) NOT NULL,
  FOREIGN KEY (user_id)
        REFERENCES user(id)
        ON DELETE CASCADE,
  FOREIGN KEY (groups_id)
        REFERENCES groups(id)
        ON DELETE CASCADE      

) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
