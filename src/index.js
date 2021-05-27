import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import css from './styles.module.scss';

export const Stepper = ({
  className,
  steps,
  activeStepIndex = 0,
  onStepClick = () => { },
  darkMode = false
}) => (
  <div className={classNames(css.Container, {
    [css.Dark]: darkMode
  }, className)}>
    {steps?.map((step, index) => (
      <div className={css.Step} key={index}>
        {index > 0 && (
          <div
            className={classNames(css.StepConnector, {
              [css.Selected]: index <= activeStepIndex,
            })}
          />
        )}
        <div
          className={classNames(css.StepLabel, {
            [css.Selected]: index <= activeStepIndex,
          })}
          onClick={() => onStepClick(index)}
        >
          {step}
        </div>
      </div>
    ))}
  </div>
);

Stepper.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.array,
  activeStepIndex: PropTypes.number,
  onStepClick: PropTypes.func.isRequired,
  darkMode: PropTypes.bool,
};
