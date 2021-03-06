﻿/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace reportanalysis {
    /** 模块-标识 */
    export const CONSOLE_ID: string = "0dda2ecb-af63-4a3d-b087-aa3dda8179b4";
    /** 模块-名称 */
    export const CONSOLE_NAME: string = "ReportAnalysis";
    /** 模块-版本 */
    export const CONSOLE_VERSION: string = "0.1.0";

    export namespace bo {
        /** 业务仓库名称 */
        export const BO_REPOSITORY_REPORTANALYSIS: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
        /** 业务对象编码-报表 */
        export const BO_CODE_REPORT: string = "${Company}_RA_REPORT";
        /** 业务对象编码-报表簿 */
        export const BO_CODE_REPORTBOOK: string = "${Company}_RA_RPTBOOK";
        /**
         * 报表类型
         */
        export enum emReportType {
            /** 系统报表 */
            REPORT,
            /** 报表服务 */
            BOE,
            /** 绩效指标 */
            KPI,
            /** 报表文件 */
            FILE
        }
        /**
         * 报表参数类型
         */
        export enum emReportParameterType {
            /** 自由文本 */
            TEXT,
            /** 日期 */
            DATETIME,
            /** 系统变量 */
            SYSTEM,
            /** 范围值 */
            RANGE,
            /** 查询结果 */
            SQL,
            /** 预置值 */
            PRESET
        }
        /**
         * 分配类型
         */
        export enum emAssignedType {
            /** 用户 */
            USER,
            /** 角色 */
            ROLE,
        }
    }
}