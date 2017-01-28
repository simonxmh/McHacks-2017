import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/startup/accounts-config.js';
import '../imports/ui/body.js';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict'; 
import './main.html';
import { Tasks } from '../api/tasks.js';
import './task.js';
import './body.html';
 
 Template.body.onCreated(function bodyOnCreated() {
   this.state = new ReactiveDict();
 });
 
 Template.body.helpers({
   tasks() {
     const instance = Template.instance();
     if (instance.state.get('hideCompleted')) {
       // If hide completed is checked, filter tasks
       return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
     }
     // Otherwise, return all of the tasks
     return Tasks.find({}, { sort: { createdAt: -1 } });
   },
   incompleteCount() {
     return Tasks.find({ checked: { $ne: true } }).count();
   },
 });
 
 Template.body.events({
   'submit .new-task'(event) {
     // Prevent default browser form submit
     event.preventDefault();
 
     // Get value from form element
     const target = event.target;
     const text = target.text.value;
 
     // Insert a task into the collection
      Tasks.insert({
        text,
        createdAt: new Date(), // current time
        owner: Meteor.userId(),
        username: Meteor.user().username,
      });
// Clear form
     target.text.value = '';
   },
   'change .hide-completed input'(event, instance) {
     instance.state.set('hideCompleted', event.target.checked);
   },
 });

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
