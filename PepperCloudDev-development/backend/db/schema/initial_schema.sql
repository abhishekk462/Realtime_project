
-- object: ACCOUNTS | type: TABLE --
-- DROP TABLE IF EXISTS ACCOUNTS CASCADE;
CREATE TABLE ACCOUNTS(
  account_extid varchar(255),
  account_id bigint NOT NULL,
  accountnumber varchar(60),
  cashflow_rate_type varchar(10),
  category_1099_misc varchar(60),
  category_1099_misc_mthreshold numeric(20,2),
  class_id bigint,
  currency_id bigint,
  date_last_modified timestamp,
  deferral_account_id bigint,
  department_id bigint,
  description varchar(25),
  full_description varchar(60),
  full_name varchar(4000),
  general_rate_type varchar(10),
  is_balancesheet varchar(1),
  is_included_in_elimination varchar(1),
  is_included_in_reval varchar(1),
  is_leftside varchar(1),
  is_summary varchar(32),
  isinactive varchar(32),
  location_id bigint,
  name varchar(93),
  openbalance numeric(22,0),
  parent_id bigint,
  type_name varchar(64),
  type_sequence bigint,
  CONSTRAINT accounts_pk PRIMARY KEY (account_id)

);

-- object: ACCOUNT_ACTIVITY | type: TABLE --
-- DROP TABLE IF EXISTS ACCOUNT_ACTIVITY CASCADE;
CREATE TABLE ACCOUNT_ACTIVITY(
  account_id bigint NOT NULL,
  accounting_book_id bigint NOT NULL,
  activity_date timestamp NOT NULL,
  amount numeric(22,0),
  department_id bigint NOT NULL,
  is_hidden_custom_line varchar(32) NOT NULL,
  subsidiary_id bigint NOT NULL,
  CONSTRAINT account_activity_pk PRIMARY KEY (account_id,accounting_book_id,activity_date,department_id,is_hidden_custom_line,subsidiary_id)

);

-- object: ACCOUNT_PERIOD_ACTIVITY | type: TABLE --
-- DROP TABLE IF EXISTS ACCOUNT_PERIOD_ACTIVITY CASCADE;
CREATE TABLE ACCOUNT_PERIOD_ACTIVITY(
  account_id bigint,
  accounting_book_id bigint
);



-- object: VENDOR_CURRENCIES | type: TABLE --
-- DROP TABLE IF EXISTS VENDOR_CURRENCIES CASCADE;
CREATE TABLE VENDOR_CURRENCIES(
  currency_id bigint,
  openbalance_foreign numeric(20,2),
  unbilled_orders_foreign numeric(20,2),
  vendor_id bigint
);


-- object: CURRENCIES | type: TABLE --
-- DROP TABLE IF EXISTS CURRENCIES CASCADE;
CREATE TABLE CURRENCIES(
  currency_extid varchar(255),
  currency_id bigint NOT NULL,
  date_last_modified timestamp,
  is_inactive varchar(32),
  name varchar(105),
  precision_0 numeric,
  symbol varchar(4),
  CONSTRAINT currencies_pk PRIMARY KEY (currency_id)

);

-- object: CURRENCYRATES | type: TABLE --
-- DROP TABLE IF EXISTS CURRENCYRATES CASCADE;
CREATE TABLE CURRENCYRATES(
  anchor_currency_id bigint,
  base_currency_id bigint,
  currency_id bigint,
  currencyrate_id bigint NOT NULL,
  currencyrate_provider_id varchar(8),
  date_effective timestamp,
  date_last_modified timestamp,
  exchange_rate numeric(30,15),
  is_anchor_only varchar(32),
  update_method_id varchar(8),
  CONSTRAINT currencyrates_pk PRIMARY KEY (currencyrate_id)

);

-- object: COUNTRIES | type: TABLE --
-- DROP TABLE IF EXISTS COUNTRIES CASCADE;
CREATE TABLE COUNTRIES(
  country_id bigint NOT NULL,
  name varchar(50),
  short_name varchar(2),
  CONSTRAINT countries_pk PRIMARY KEY (country_id)

);

-- object: STATES | type: TABLE --
-- DROP TABLE IF EXISTS STATES CASCADE;
CREATE TABLE STATES(
  country_id bigint,
  name varchar(50),
  short_name varchar(36),
  state_id bigint NOT NULL,
  CONSTRAINT states_pk PRIMARY KEY (state_id)

);

-- object: SUBSIDIARIES | type: TABLE --
-- DROP TABLE IF EXISTS SUBSIDIARIES CASCADE;
CREATE TABLE SUBSIDIARIES(
  base_currency_id bigint,
  date_last_modified timestamp,
  edition varchar(20),
  federal_number varchar(15),
  fiscal_calendar_id bigint,
  full_name varchar(4000),
  is_elimination varchar(32),
  is_moss varchar(32),
  isinactive varchar(32),
  legal_name varchar(83),
  moss_nexus_id bigint,
  name varchar(83),
  parent_id bigint,
  coreorderamount numeric(21,2),
  coreorderquantity numeric(18,8),
  coreorderquantitydiff numeric(18,8),
  receiptamount numeric(20,2),
  receiptquantity numeric(18,8),
  receiptquantitydiff numeric(18,8),
  state_tax_number varchar(20),
  subsidiary_extid varchar(255),
  subsidiary_id bigint NOT NULL,
  tran_num_prefix varchar(8),
  url varchar(64),
  CONSTRAINT subsidiaries_pk PRIMARY KEY (subsidiary_id)

);


-- object: ADDRESS_BOOK | type: TABLE --
-- DROP TABLE IF EXISTS ADDRESS_BOOK CASCADE;
CREATE TABLE ADDRESS_BOOK(
  address varchar(999),
  address_book_id bigint NOT NULL,
  address_line_1 varchar(150),
  address_line_2 varchar(150),
  address_line_3 varchar(150),
  attention varchar(100),
  city varchar(50),
  company varchar(100),
  country varchar(50),
  date_last_modified timestamp,
  entity_id bigint,
  is_default_bill_address varchar(32),
  is_default_ship_address varchar(32),
  name varchar(150),
  phone varchar(100),
  state varchar(50),
  zip varchar(36),
  CONSTRAINT address_book_pk PRIMARY KEY (address_book_id)

);


-- object: user_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS user_seq ;
# CREATE SEQUENCE user_seq
# INCREMENT BY 1
# MINVALUE 0
# MAXVALUE 2147483647
# START WITH 1
# CACHE 1
# NO CYCLE
# ;
#
#
# CREATE SEQUENCE core_seq
# INCREMENT BY 1
# MINVALUE 0
# MAXVALUE 2147483647
# START WITH 1
# CACHE 1
# NO CYCLE
# ;




-- object: persistent_audit_event | type: TABLE --
-- DROP TABLE IF EXISTS persistent_audit_event CASCADE;
CREATE TABLE persistent_audit_event(
  event_id bigint NOT NULL AUTO_INCREMENT,
  principal varchar(255),
  event_date timestamp,
  event_type varchar(255),
  CONSTRAINT perisistent_audit_event_pk PRIMARY KEY (event_id)

);
-- ddl-end --

-- object: persistent_audit_evt_data | type: TABLE --
-- DROP TABLE IF EXISTS persistent_audit_event_data CASCADE;
CREATE TABLE persistent_audit_evt_data(
  event_id bigint NOT NULL,
  name varchar(255) NOT NULL,
  value varchar(255),
  CONSTRAINT event_data_pk PRIMARY KEY (event_id,name)

);
-- ddl-end --

--

-- object: UI_FIELD_DTL | type: TABLE --
-- DROP TABLE IF EXISTS UI_FIELD_DTL CASCADE;
CREATE TABLE UI_FIELD_DTL(
  f_id varchar(40) NOT NULL,
  f_typ_code varchar(40),
  f_name varchar(200),
  f_description varchar(4096),
  f_grp_cd varchar(40),
  f_icon_class varchar(200),
  is_system_field char(1) DEFAULT 'Y',
  is_label char(1),
  label_key varchar(200),
  f_min_length int,
  f_max_length int,
  CONSTRAINT UI_FIELD_DTL_PK PRIMARY KEY (f_id)

);
-- ddl-end --


-- object: UI_SCREEN_DTL | type: TABLE --
-- DROP TABLE IF EXISTS UI_SCREEN_DTL CASCADE;
CREATE TABLE UI_SCREEN_DTL(
  scr_id varchar(40) NOT NULL,
  scr_details varchar(2000),
  scr_title varchar(200),
  scr_custom_label varchar(2000),
  scr_grp_cd varchar(40),
  scr_parent_id bigint,
  scr_layout_columns smallint DEFAULT 2,
  scr_search_url varchar(2000),
  CONSTRAINT UI_SCREEN_DTL_PK PRIMARY KEY (scr_id)

);
-- ddl-end --

CREATE TABLE UI_SCREEN_DATA_MAP(
  scr_id varchar(40) NOT NULL,
  data_src_id varchar(40) NOT NULL,
  CONSTRAINT UI_SCREEN_DATA_MAP_PK PRIMARY KEY (scr_id,data_src_id)

);


-- object: UI_SCREEN_CONTENT_DTL | type: TABLE --
-- DROP TABLE IF EXISTS UI_SCREEN_CONTENT_DTL CASCADE;
CREATE TABLE UI_SCREEN_CONTENT_DTL(
  id varchar(40) NOT NULL,
  scr_id varchar(40) ,
  tmpt_id VARCHAR(40) NOT NULL,
  f_id varchar(40),
  sec_id varchar(40),
  display_order int,

  tab_index smallint,
  label_on_screen varchar(2000),

  container_id varchar(40),
  pre_element_id varchar(40),
  post_element_id varchar(40),
  is_required char(1) DEFAULT 'N',

  V_CREATED_BY      VARCHAR(50),
  D_CREATED_DATE    DATETIME,
  V_LAST_MODIFIED_BY VARCHAR(50),
  D_LAST_MODIFIED_DATE DATETIME,
  CONSTRAINT UI_SCREEN_CONTENT_DTL_PK PRIMARY KEY (id)

);
-- ddl-end --

-- object: UI_FIELD_TYPE | type: TABLE --
-- DROP TABLE IF EXISTS UI_FIELD_TYPE CASCADE;
CREATE TABLE UI_FIELD_TYPE(
  f_typ_code varchar(40),
  f_typ_description varchar(200),
  f_data_typ varchar(10),
  CONSTRAINT UI_FIELD_TYPE_PK PRIMARY KEY (f_typ_code)
);
-- ddl-end --

CREATE TABLE UI_SECTION_DTL(
  sec_id varchar(40),
  sec_name varchar(200),
  sec_description varchar(4000),
  sec_typ varchar(10),
  sec_label_key varchar(200),
  parent_sec_id varchar(32),

  V_CREATED_BY      VARCHAR(50),
  D_CREATED_DATE    DATETIME,
  V_LAST_MODIFIED_BY VARCHAR(50),
  D_LAST_MODIFIED_DATE DATETIME,
  CONSTRAINT UI_SECTION_DTL_PK PRIMARY KEY (sec_id)
);

--
-- CREATE TABLE UI_SECTION_CONTENT_DTL(
--   id bigint,
--   sec_id bigint,
--   f_id varchar(4000),
--   parent_sec_id bigint,
--   f_is_required int,
--   f_editable VARCHAR(1),
--   f_display_order int,
--   f_pre_f_id bigint,
--   f_post_f_id bigint,
--   created_by varchar(200),
--   created_date timestamp,
--   last_modified_by varchar(50),
--   last_modified_date timestamp,
--   CONSTRAINT UI_SECTION_CONTENT_PK PRIMARY KEY (sec_id)
-- );
--

CREATE TABLE OBJECT_RECORD_DTL(
  id bigint,
  trn_id varchar(40),
  f_id varchar(40),
  f_data_type varchar(40),
  text_val varchar(255),
  int_val int,
  date_val timestamp,

  V_CREATED_BY      VARCHAR(50),
  D_CREATED_DATE    DATETIME,
  V_LAST_MODIFIED_BY VARCHAR(50),
  D_LAST_MODIFIED_DATE DATETIME,
  CONSTRAINT OBJECT_RECORD_DTL_pk PRIMARY KEY (id)

);


CREATE TABLE TRN_RECORD_DTL(
  trn_id varchar(40),
  scr_id varchar(40),

  V_CREATED_BY      VARCHAR(50),
  D_CREATED_DATE    DATETIME,
  V_LAST_MODIFIED_BY VARCHAR(50),
  D_LAST_MODIFIED_DATE DATETIME,
  CONSTRAINT TRN_RECORD_DTL_pk PRIMARY KEY (trn_id)

);






-- object: accounts_accounts_fk | type: CONSTRAINT --
-- ALTER TABLE ACCOUNTS DROP CONSTRAINT IF EXISTS accounts_accounts_fk CASCADE;
ALTER TABLE ACCOUNTS ADD CONSTRAINT accounts_accounts_fk FOREIGN KEY (deferral_account_id)
REFERENCES ACCOUNTS (account_id) ;
-- ddl-end --

-- object: accounts_accounts_fk_2 | type: CONSTRAINT --
-- ALTER TABLE ACCOUNTS DROP CONSTRAINT IF EXISTS accounts_accounts_fk_2 CASCADE;
ALTER TABLE ACCOUNTS ADD CONSTRAINT accounts_accounts_fk_2 FOREIGN KEY (parent_id)
REFERENCES ACCOUNTS (account_id);
-- ddl-end --

-- object: account_activity_accounts_fk | type: CONSTRAINT --
-- ALTER TABLE ACCOUNT_ACTIVITY DROP CONSTRAINT IF EXISTS account_activity_accounts_fk CASCADE;
ALTER TABLE ACCOUNT_ACTIVITY ADD CONSTRAINT account_activity_accounts_fk FOREIGN KEY (account_id)
REFERENCES ACCOUNTS (account_id) ;
-- ddl-end --


-- ddl-end --

-- object: states_countries_fk | type: CONSTRAINT --
-- ALTER TABLE STATES DROP CONSTRAINT IF EXISTS states_countries_fk CASCADE;
ALTER TABLE STATES ADD CONSTRAINT states_countries_fk FOREIGN KEY (country_id)
REFERENCES COUNTRIES (country_id) ;
-- ddl-end --



-- object: persistent_data_event_fk | type: CONSTRAINT --
-- ALTER TABLE persistent_audit_event_data DROP CONSTRAINT IF EXISTS persistent_data_event_fk CASCADE;
ALTER TABLE persistent_audit_evt_data ADD CONSTRAINT persistent_data_event_fk FOREIGN KEY (event_id)
REFERENCES persistent_audit_event (event_id) ;
-- ddl-end --







-- Date : February 18 2017 --

CREATE TABLE PARAM_CODE(
  id bigint,
  f_id varchar(40),
  param_key VARCHAR(255),
  param_value VARCHAR(255),
  code_type VARCHAR(40),
  code_type_grp VARCHAR (100),
  org_id bigint,
  role_id bigint,
  V_CREATED_BY      VARCHAR(50),
  D_CREATED_DATE    DATETIME,
  V_LAST_MODIFIED_BY VARCHAR(50),
  D_LAST_MODIFIED_DATE DATETIME
);
-- 05-06-2016 - end


CREATE TABLE MENU_DTL(
  id bigint,
  m_id varchar(40),
  m_type varchar(2),
  m_parent bigint,
  m_icon varchar(255),
  scr_id varchar(32),
  m_label_key varchar(255),
  m_en_label varchar(255),
  CONSTRAINT MENU_DTL_PK PRIMARY KEY (id)
);

-- DATE : April 19, 2017

CREATE TABLE  T_USER(
  V_USER_ID         VARCHAR(40) PRIMARY KEY ,
  V_EXT_USER_ID     VARCHAR(40),
  V_USER_NAME       VARCHAR(40),
  V_NAME            VARCHAR(200),
  V_ABOUT_ME        VARCHAR(2000),
  V_EMAIL           VARCHAR(40),
  V_ACTIVE_IND      VARCHAR(1) DEFAULT 'Y',
  V_ADDRESS         VARCHAR(2000),
  V_RECEIVE_EMAIL_IND VARCHAR(1),
  V_ALIAS           VARCHAR(40),
  V_FORCAST_IND     VARCHAR(1),
  V_CLIENT_ID       VARCHAR(40),
  V_COMPANY_ID      VARCHAR(40),
  V_COMPANY_NAME    VARCHAR(200),
  V_EMPLOYMENT_NUM  VARCHAR(40),
  V_DEPARTMENT      VARCHAR(40),
  V_DIVISION        VARCHAR(40),
  D_START_DATE      DATE,
  D_END_DATE        DATE,
  N_LOGIN_LIMIT     INT,
  V_MANAGER         VARCHAR(40),
  V_CREATED_BY      VARCHAR(50),
  D_CREATED_DATE    DATETIME,
  V_LAST_MODIFIED_BY VARCHAR(50),
  D_LAST_MODIFIED_DATE DATETIME
);

CREATE TABLE T_USER_GRP(
  V_USER_GRP_ID     VARCHAR(40) PRIMARY KEY ,
  V_NAME            VARCHAR(200),
  V_PARENT_ID       VARCHAR(40),
  V_CREATED_BY      VARCHAR(50),
  D_CREATED_DATE    DATETIME,
  V_LAST_MODIFIED_BY VARCHAR(50),
  D_LAST_MODIFIED_DATE DATETIME
);


CREATE TABLE T_USER_GRP_MAP(
  V_USER_GRP_ID   VARCHAR(40),
  V_USER_ID       VARCHAR(40),

  CONSTRAINT T_USER_GRP_MAP_PK PRIMARY KEY (V_USER_GRP_ID,V_USER_ID)
);



-- DROP TABLE IF EXISTS COMPANY CASCADE;
CREATE TABLE T_COMPANY_DTL(
  V_COMPANY_ID      VARCHAR(40),
  V_CLIENT_ID       VARCHAR(40),
  V_ADDRESS         VARCHAR(999),
  V_ADDRESS_LINE_1  VARCHAR(150),
  V_ADDRESS_LINE_2  VARCHAR(150),
  V_ADDRESS_LINE_3  VARCHAR(150),
  V_CITY            VARCHAR(50),
  V_DESCRIPTION     VARCHAR(4000),
  V_EXT_ID          VARCHAR(255),
  V_CURRENCY_ID     VARCHAR(255),
  V_EMAIL           VARCHAR(83),
  V_NAME            VARCHAR(255),
  V_ACTIVE_IND      VARCHAR(1) DEFAULT 'Y',
  V_LOGIN_ACCESS_IND VARCHAR(1),
  V_OTHER_NAME       VARCHAR(255),
  V_PARENT_ID       VARCHAR(40),
  V_PHONE_NO        VARCHAR(20),
  V_STATE           VARCHAR(255),
  V_SUBSIDIARY      VARCHAR(255),
  V_WEBSITE_URL     VARCHAR(255),
  V_ZIP_CODE        VARCHAR(36),
  V_CREATED_BY      VARCHAR(50),
  D_CREATED_DATE    DATETIME,
  V_LAST_MODIFIED_BY VARCHAR(50),
  D_LAST_MODIFIED_DATE DATETIME,

  CONSTRAINT T_COMPANY_DTL_PK PRIMARY KEY (V_COMPANY_ID)

);


CREATE TABLE T_CLIENT_DTL(

  V_CLIENT_ID       VARCHAR(40),
  V_COMPANY_ID      VARCHAR(40),
  V_ACTIVE_IND      VARCHAR(1) DEFAULT 'Y',
  V_NAME            VARCHAR(255),
  V_DESCRIPTION     VARCHAR(255),
  V_LANGUAGE        VARCHAR(10),
  V_WEBSITE         VARCHAR(255),
  V_CREATED_BY      VARCHAR(50),
  D_CREATED_DATE    DATETIME,
  V_LAST_MODIFIED_BY VARCHAR(50),
  D_LAST_MODIFIED_DATE DATETIME,

  CONSTRAINT T_CLIENT_DTL_PK PRIMARY KEY (V_CLIENT_ID)

);


CREATE TABLE T_USER_COMPANY_MAP(
  V_COMPANY_ID      VARCHAR(40),
  V_USER_ID         VARCHAR(40),

  CONSTRAINT T_USER_COMPANY_MAP_PK PRIMARY KEY (V_COMPANY_ID,V_USER_ID)
);

CREATE TABLE T_SCREEN_TEMPLATE(
  V_SCREEN_TEMPLATE_ID      VARCHAR(40),
  V_SCREEN_ID               VARCHAR(40),
  V_NAME                    VARCHAR(200),
  V_COMPANY_ID              VARCHAR(40),
  V_CREATED_BY      VARCHAR(50),
  D_CREATED_DATE    DATETIME,
  V_LAST_MODIFIED_BY VARCHAR(50),
  D_LAST_MODIFIED_DATE DATETIME,

  CONSTRAINT T_SCREEN_TEMPLATE_PK PRIMARY KEY (V_SCREEN_TEMPLATE_ID)
)
