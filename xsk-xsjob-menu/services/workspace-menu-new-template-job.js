/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company and XSK contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Apache License, v2.0
 * which accompanies this distribution, and is available at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-FileCopyrightText: 2021 SAP SE or an SAP affiliate company and XSK contributors
 * SPDX-License-Identifier: Apache-2.0
 */
exports.getTemplate = function () {
  return {
    "name": "xsjob",
    "label": "XS Scheduled Job",
    "extension": "xsjob",
    "isModel": true,
    "data": `{
  \"description\": \"Read stock value\",
  \"action\": \"yahoo:yahoo.xsjs::readStock\",
  \"schedules\": [
    {
      \"description\": \"Read current stock value\",
      \"xscron\": \"* * * * * * 59\",
      \"parameter\": {
        \"stock\": \"SAP.DE\"
      }
    }
  ]
}`
  };
};
