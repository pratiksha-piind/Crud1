import * as React from 'react';
// import styles from './Crud3.module.scss';
import type { ICrud4Props } from './ICrud4Props';
import { TextField, PrimaryButton} from '@fluentui/react';

export interface IStates{
  EmployeeName: string;
  EmployeeEmailID: string;
}

export default class Crud4 extends React.Component<ICrud4Props, IStates> {
  constructor(props:ICrud4Props){
    super(props);
    this.state={
      EmployeeName: '',
      EmployeeEmailID: '',
    }
  }

  private handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    this.setState({
      EmployeeName: '',
      EmployeeEmailID: '',
    });
  }

  private handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
    event.preventDefault();
    this.setState({ EmployeeName: newValue || '' });
    
};

private handleEmailChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
  event.preventDefault();  
  this.setState({ EmployeeEmailID: newValue || '' });
};

  public render(): React.ReactElement<ICrud4Props>{
    const { EmployeeName, EmployeeEmailID, } = this.state;
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <TextField
          label="Name"
          value={EmployeeName}
          onChange={this.handleNameChange}
          required
        />
        <TextField
          label="Email-ID"
          value={EmployeeEmailID}
          onChange={this.handleEmailChange}
          type="email"
          required
        />
        <PrimaryButton text="Submit" type="submit" />
      </form>
    </div>
          );
   }
}
