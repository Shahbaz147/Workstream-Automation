export class SigninPageLocators {
  emailField = 'input[name="email"]';
  passwordField = 'input[name="password"]';
  loginButton = '[type="submit"]';
}

export class HomePageLocators {
  sideBar = '[class *= "sidebar-nav"]';
  trainingTabList = ".MuiList-root";
}

export class TrainingDashboardLocators {
  trainingDashboardText = "h4";
  recordTrainingButton = 'button[title^="Add training"]';
}

export class TrainingDrawerLocators {
  trainingDrawerText = '[class*="MuiTypography-h5"]';
  trainingTitle = "[class*=normal-select__value-container]";
  trainingDetails = "[class*=ql-blank]";
  trainingFee = 'input[name="training.fee"]';
  trainer = "#singleline";
  trainingTypeField = "[class*=MuiSelect-select]";
  trainingTypeList = "[class*=MuiMenu-list]";
  dateField = "[class*=no-outline]"; // start = .eq(0) , End = .eq(1)
  dateCalender = '[class="react-datepicker__month-container"]';
  dateDiv = '[class*="react-datepicker__day"]';
  monthTabInCalender = '[class*="month-dropdown"]'; // MonthTab = .eq(0) , MonthList = .eq(1)
  uploadFileButton = 'input[type="file"]';
}

export class SavedTrainingVerificationLocators {
  savedTrainingTitle = "h6";
  savedTrainingtTitleText = 'input[name="training.title"]';
  savedTrainingDetail = ".ql-editor > p";
  savedTrainingTrainer = 'input[name="training.trainer"]';
  savedTrainingType = '[id="mui-component-select-training.type"]';
  savedTrainingFee = 'input[name="fee"]';
  savedTrainingStartDate = 'input[placeholder="Start Date"]';
  savedTrainingEndDate = 'input[placeholder="End Date"]';
  savedTrainingFile = 'div:contains("Attachments")';
}
export class formdashboardselectors{
  formsTab = '//div[text()=\"Forms\"]';
}
