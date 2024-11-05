/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { createConfiguration } from '@adobe/spacecat-shared-data-access/src/models/configuration.js';

/**
 * Data transfer object for Configuration.
 */
export const ConfigurationDto = {

  /**
   * Converts a JSON object into a Configuration object.
   * @param {object } jsonObject - JSON object.
   * @returns {Readonly<Configuration>} Configuration object.
   */
  fromJson: (jsonObject) => {
    const configurationData = {
      version: jsonObject.version,
      jobs: jsonObject.jobs,
      ...(jsonObject.handlers ? { handlers: jsonObject.handlers } : {}),
      queues: jsonObject.queues,
      ...(jsonObject.slackRoles ? { slackRoles: jsonObject.slackRoles } : {}),
    };

    return createConfiguration(configurationData);
  },

  /**
   * Converts a Configuration object into a JSON object.
   * @param {Readonly<Configuration>} configuration - Configuration object.
   * @returns {{
   * }}
   */
  toJSON: (configuration) => ({
    version: configuration.getVersion(),
    jobs: configuration.getJobs(),
    ...(configuration.getHandlers() ? { handlers: configuration.getHandlers() } : {}),
    queues: configuration.getQueues(),
    ...(configuration.getSlackRoles() ? { slackRoles: configuration.getSlackRoles() } : {}),
  }),
};
