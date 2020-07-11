import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';

interface IProps {
    step: number,
    content: boolean,
    orientation?: "horizontal" | "vertical",
    getSteps: () => Array<string>,
    getStepContent?: any
}

const VerticalLinearStepper: React.FC<IProps> = ({ step, content, orientation="horizontal", getStepContent, getSteps }) => {
  const steps = getSteps();

  return (
      <Stepper  activeStep={step} orientation={orientation}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
              <StepContent>
              {content&&
                <Typography>{getStepContent(index)}</Typography>
              }
              </StepContent>
          </Step>
        ))}
      </Stepper>
  );
}

export default VerticalLinearStepper;

// function getSteps() {
//   return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
// }

// function getStepContent(step: number) {
//   switch (step) {
//     case 0:
//       return `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`;
//     case 1:
//       return 'An ad group contains one or more ads which target a shared set of keywords.';
//     case 2:
//       return `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`;
//     default:
//       return 'Unknown step';
//   }
// }