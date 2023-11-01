/* eslint-disable */

export const USER_REGEX = /^.{4,24}$/;
export const PWD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/;
export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const ISO_TIME_REGEX = /\d\d:\d\d/;
