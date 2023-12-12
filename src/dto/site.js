/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { createSite } from '@adobe/spacecat-shared-data-access/src/models/site.js';

/**
 * Data transfer object for Site.
 */
export const SiteDto = {

  /**
   * Converts a JSON object into a Site object.
   * @param {object } jsonObject - JSON object.
   * @returns {Readonly<Site>} Site object.
   */
  fromJson: (jsonObject) => {
    const siteData = {
      id: jsonObject.id,
      baseURL: jsonObject.baseURL,
      gitHubURL: jsonObject.gitHubURL,
      imsOrgId: jsonObject.imsOrgId,
      isLive: jsonObject.isLive,
      createdAt: jsonObject.createdAt,
      updatedAt: jsonObject.updatedAt,
    };

    return createSite(siteData);
  },

  /**
   * Converts a Site object into a JSON object.
   * @param {Readonly<Site>} site - Site object.
   * @returns {{
   * id: string,
   * baseURL, gitHubURL: string,
   * gitHubURL: string,
   * imsOrgId: string,
   * isLive: boolean,
   * createdAt: string,
   * updatedAt: string
   * }}
   */
  toJSON: (site) => ({
    id: site.getId(),
    baseURL: site.getBaseURL(),
    gitHubURL: site.getGitHubURL(),
    imsOrgId: site.getImsOrgId(),
    isLive: site.isLive(),
    createdAt: site.getCreatedAt(),
    updatedAt: site.getUpdatedAt(),
  }),

  // TODO: implement toCSV
  toCSV: () => '',

  // TODO: implement toXLS
  toXLS: () => null,
};