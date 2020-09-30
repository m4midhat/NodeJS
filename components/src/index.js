import React from 'react';
import ReactDom from 'react-dom';
import faker, { fake } from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import MessageBox from './MessegeBox';
import Placeholder from './PlaceHolder';

const App = () => {

    return (
        <div className="ui container comments">
            <br></br>
            <Placeholder >
                <div className = "ui icon header">
                    <i className="pdf file outline icon"></i>
                    No documents are listed for the customer
                </div>
                <div className="ui primary button">Add Attachments</div>
            </Placeholder>

            <MessageBox header="Warning" messege="Are you sure?" />

            <ApprovalCard>
                <h4>Warning</h4>
                Are you sure you want to continue ?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo="Today at 6PM" avatar={faker.image.avatar()} comment={faker.lorem.sentence()} />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo="Today at 7PM" avatar={faker.image.avatar()} comment={faker.lorem.sentence()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo="Today at 8PM" avatar={faker.image.avatar()} comment={faker.lorem.sentence()} />
            </ApprovalCard>

            
        </div>
    );

}

ReactDom.render(<App />, document.querySelector('#root')); 