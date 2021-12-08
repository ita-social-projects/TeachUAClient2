import React, {useState} from "react";
import {Form, Popconfirm, Table, Typography} from "antd";
import PropTypes from 'prop-types';
import EditableColumn from "./EditableColumn";

const EditableTable = ({bordered, className, columns, data, onSave, form, actions, footer, header}) => {
    const [editingKey, setEditingKey] = useState('');

    const edit = (record) => {
        form.setFieldsValue({
            ...record,
        });
        setEditingKey(record.id);
    };

    const cancelEditing = () => {
        setEditingKey('');
    };

    const actionColumns = {
        title: 'Дія',
        render: (_, record) => {
            const editable = record.id === editingKey;
            return editable ? (
                <div>
                    <Popconfirm title="Зберегти зміни?"
                                cancelText="Ні"
                                okText="Так"
                                cancelButtonProps={{className: "popConfirm-cancel-button"}}
                                okButtonProps={{className: "popConfirm-ok-button"}}
                                onConfirm={() => {
                                    onSave(record);
                                    cancelEditing();
                                }}>
                        Зберегти
                    </Popconfirm>
                    <span style={{marginLeft: 8}} onClick={cancelEditing}>Відмінити</span>
                </div>
            ) : (
                <div>
                    <Typography.Link disabled={editingKey !== ''}
                                     onClick={() => edit(record)}>
                        <span className="table-action">Редагувати</span>
                    </Typography.Link>
                    {actions(record)}
                </div>
            );
        }
    };

    const editableColumns = columns.concat(actionColumns).map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.inputType ? col.inputType : 'text',
                selectData: col.selectData,
                uploadFolder: col.uploadFolder,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: record.id === editingKey,
            }),
        };
    });

    return (
        <Form form={form} component={false}>
            <div className="table-header">
                {header}
            </div>
            <Table
                components={{
                    body: {
                        cell: EditableColumn,
                    },
                }}
                bordered={bordered}
                dataSource={data}
                columns={editableColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancelEditing,
                }}
                size="middle"
                tableLayout="fixed"
                className={`table ${className ? className : ''}`}
                footer={() => footer}
            />
        </Form>
    );
};
EditableTable.propTypes = {
    bordered: PropTypes.any,
    className:PropTypes.any,
    columns: PropTypes.any,
    data: PropTypes.any,
    onSave: PropTypes.any,
    form: PropTypes.any,
    actions:PropTypes.any,
    footer: PropTypes.any,
    header: PropTypes.any,
    setFieldsValue: PropTypes.any,
    concat:PropTypes.any,

};
export default EditableTable;