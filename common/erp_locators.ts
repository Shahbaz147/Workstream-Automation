class SigninPageLocators {
    pageTitle = 'Workstream - Portal';
    emailField = 'input[name="email"]';
    passwordField = 'input[name="password"]';
    loginButton = '[type="submit"]';
}

class HomePageLocators {
    sideBar = '[class*= sidebar-nav]';
    trainingText = 'Training';
    trainingTabList = '[class*=MuiCollapse-entered]';
    dashboardText = 'Dashboard';
}

class TrainingDashboardLocators {
    trainingDashboardText = '[class*=MuiTypography-h4]';
    recordTrainingButton = 'button[title*="Add training"]';
}

class TrainingDrawerLocators {
    trainingDrawerText = '[class*=MuiTypography-h5]';
    recordTrainingButton = 'Record Training';
    trainingTitle = '[class*=normal-select__value-container]';
    trainingDetails = '[class*=ql-blank]';
    trainingFee = '[id="training.fee"]';
    trainer = '[id="singleline"]';
    trainingTypeField = '[class*=MuiSelect-select]';
    trainingTypeList = '[class*=MuiMenu-list]';
    dateField = '[class*=no-outline]'; // start = .eq(1) , End = .eq(2)
    dateCalender = '[class="react-datepicker__month-container"]';
    dateDiv = '[class*="react-datepicker__day"]'; 
    endDateCalender = '[class*="react-datepicker__day"]';
    monthTabInCalender = '[class="react-datepicker__month-read-view--selected-month"]';
    monthsListInCalender = '[class="react-datepicker__month-dropdown"]';
    uploadFileButton = 'input[type="file"]';
    submitTraining = '[class*="jss32982"]';
}

class SavedTrainingVerificationLocators {
    savedTrainingTitle = 'h6[class*="jss46631"]';
    savedTrainingtTitleText = '[id="training.title"]';
    savedTrainingDetail = '[class="ql-editor"]>p';
    savedTrainingTrainer = 'input[name="training.trainer"]';
    savedTrainingType = '[id="mui-component-select-training.type"]';
    savedTrainingFee = 'input[name="fee"]';
    savedTrainingStartDate = 'input[placeholder="Start Date"]';
    savedTrainingEndDate = 'input[placeholder="End Date"]';
    savedTrainingFile = '[class*="MuiGrid-grid-xs-12 MuiGrid-grid-sm-9"] a';
}

export { SigninPageLocators };
export { HomePageLocators };
export { TrainingDashboardLocators };
export { TrainingDrawerLocators };
export { SavedTrainingVerificationLocators };
