/* Released under the BSD 2-Clause License
 *
 * Copyright © 2018-present, terrestris GmbH & Co. KG and GeoStyler contributors
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import React from 'react';

import {
  Select
} from 'antd';
import { WellKnownName } from 'geostyler-style';

import _get from 'lodash/get';
import { useGeoStylerLocale } from '../../../../context/GeoStylerContext/GeoStylerContext';
const Option = Select.Option;

export interface WellKnownNameFieldProps {
  value?: WellKnownName;
  wellKnownNames?: WellKnownName[];
  onChange?: (wellKnownName: WellKnownName) => void;
}

/**
 * WellKnownNameField
 */
export const WellKnownNameField: React.FC<WellKnownNameFieldProps> = ({
  onChange,
  value = 'circle',
  wellKnownNames = ['arrow', 'arrowhead', 'asterisk_fill', 'circle', 'cross', 'cross2',
    'cross_fill', 'decagon', 'diagonal_half_square', 'diamond', 'equilateral_triangle',
    'filled_arrowhead', 'half_arc', 'half_square', 'heart', 'hexagon', 'left_half_triangle',
    'line', 'octagon', 'parallelogram_left', 'parallelogram_right', 'pentagon', 'quarter_arc',
    'quarter_circle', 'quarter_square', 'right_half_triangle', 'rounded_square', 'semi_circle',
    'shield', 'square', 'square_with_corners', 'star', 'star_diamond', 'third_arc', 'third_circle',
    'trapezoid', 'triangle', 'x',
    'shape://vertline', 'shape://horline', 'shape://slash',
    'shape://backslash', 'shape://dot', 'shape://plus',
    'shape://times', 'shape://oarrow', 'shape://carrow']
}) => {

  const locale = useGeoStylerLocale('WellKnownNameField');

  const getWKNSelectOptions = () => {
    return wellKnownNames.map(name => {
      // if locales are not available, set Option text to name value
      const loc = _get(locale, 'wellKnownNames[' + name + ']') || name;
      return (
        <Option
          key={name}
          value={name}
        >
          {loc}
        </Option>
      );
    });
  };

  return (
    <Select
      className="editor-field wellknownname-field"
      value={value}
      onChange={onChange}
    >
      {getWKNSelectOptions()}
    </Select>
  );
};
