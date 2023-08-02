---
title: test-3
createdAt: 2019-04-27
author: Unknown
avatar: /unknown-avatar.png
layout: post
draft: true
---

## 题目

> homebrew event loop

| 标识              | 交易状态                      | 相关事件              |
| ----------------- | ----------------------------- | --------------------- |
| UNAUTHORIZED      | 待授权                        | 无                    |
| AUTHORIZE_TIMEOUT | 授权超时                      | `WITHHOLDING:FAILURE` |
| AUTHORIZE_FAILURE | 授权失败                      | `WITHHOLDING:FAILURE` |
| AUTHORIZED        | 已授权                        | `WITHHOLDING:AUTHED`  |
| SETTLED           | 已结算                        | 无                    |
| CANCELLED         | 已取消                        | 无                    |
| SUSPENDED         | 已暂停冻结 <br />可能产生坏账 | 无                    |

| 标识     | 交易状态 |
| -------- | -------- |
| UNSIGNED | 未签约   |
| SIGNED   | 已签约   |
