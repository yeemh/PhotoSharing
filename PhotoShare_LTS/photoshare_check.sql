#회원 가입
insert into user(id, password)
values("tgwing", 2015);
#확인
select *
from user;

#폴더 생성
insert into folder_list(folder_id, user_id)
values("동아리 사진", "tgwing");
#확인
select *
from folder_list;

#사진 추가
insert into photo(date, location, user_id, folder_id)
values("2020-06-23", "경기", "tgwing", "동아리 사진");
#확인
select *
from photo;

#폴더 삭제(사진 연쇄 삭제)
DELETE FROM folder_list
WHERE folder_id = "동아리 사진";
select *
from photo;

#탈퇴
DELETE FROM user
WHERE id = "tgwing";
#확인
select *
from user;
select *
from folder_list;

#이미지 메타데이터
select id, date, location
from photo;

#원하는 지역의 사진만 출력
select id, date, location
from photo
where location = "서울";

#시간 내림차순으로 정렬
select id, date, location
from photo
order by date DESC;

#본인이 올린 사진만 출력
select id, date, location
from photo
where user_id = "lkjjr0424";