import React from 'react'
import { connect } from "react-redux"
import {Button, ButtonGroup} from 'react-bootstrap'

class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false
        }
        this.toggleSelection = this.toggleSelection.bind(this);
        this.toggleEditable = this.toggleEditable.bind(this);
    };

    getDataValues(entry) {
        switch (this.props.type) {
            case 'tasks':
                return {
                    date: entry.date,
                    city: entry.city,
                    name: entry.name,
                    catering: entry.name,
                    actions: 'ACTIONS',
                }
            case 'users':
                return {
                    uid: entry.id,
                    firstName: entry.firstName,
                    lastName: entry.lastName,
                    region: entry.region,
                    email: entry.email,
                    phone: entry.phone,
                    tz: entry.tz
                }
            default:
                break;
        }
    }

    toggleSelection() {
        if (this.props.isSelectable) {
            this.props.selectCallback(this.props.entry, !this.props.isSelected);
        }
    }

    toggleEditable() {
        this.setState({isEditable: !this.state.isEditable});
    }

    render() {
        var buttons = [];
        switch (this.props.page) {
            case 'assignedTasks':
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'TASK_NOTES', entries: this.props.entry}),
                        color: 'outline-primary',
                        text: 'הערות'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'TASK_CANCEL' }),
                        color: 'outline-secondary',
                        text: 'הסרה'
                    },
                ];
                break;
            case 'taskReports':
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL',msg: 'REPORT_FILL' }),
                        color: 'outline-primary',
                        text: 'דיווח'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'REPORT_UNDONE' }),
                        color: 'outline-secondary',
                        text: 'לא בוצע'
                    },
                ];
                break;
            case 'adminUsers':
                buttons = [
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'EDIT_USER', entries: this.props.entry}),
                        color: 'outline-primary',
                        text: 'עריכה'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'RESET_PASSWORD', entries: this.props.entry}),
                        color: 'outline-secondary',
                        text: 'איפוס סיסמה'
                    },
                    {
                        onClick: () => this.props.dispatch({ type: 'OPEN_MODAL', msg: 'RESET_PASSWORD', entries: this.props.entry}),
                        color: 'outline-secondary',
                        text: 'מחיקה'
                    }
                ];
                break;
        }

        return (
            <tr className={(this.props.isSelected ? 'table-primary' : '') + (this.props.isSelectable ? ' entry-selectable' : '')}>
                {this.props.tableColumns.map((column) => {
                    if(column != 'actions'){
                        return (
                            <td onClick={this.toggleSelection} key={column}>
                                {this.getDataValues(this.props.entry)[column]}
                            </td>
                        );
                    } else {
                        return (
                        <td key={column}>
                            <ButtonGroup>
                                {buttons.map((button) => {
                                return (
                                    <Button key={button.text} onClick={button.onClick} variant={button.color}>{button.text}</Button>
                                    );
                                })}
                            </ButtonGroup>
                        </td>);
                    }
                })}
            </tr>
        );
    }
}

export default connect(state => state)(Entry);