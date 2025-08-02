import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Check, X } from "lucide-react";

interface EditableTextProps {
  value: string;
  onSave: (value: string) => void;
  multiline?: boolean;
  className?: string;
  placeholder?: string;
}

export const EditableText = ({ 
  value, 
  onSave, 
  multiline = false, 
  className = "",
  placeholder = ""
}: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    onSave(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2">
        {multiline ? (
          <Textarea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder={placeholder}
            className="flex-1"
          />
        ) : (
          <Input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder={placeholder}
            className="flex-1"
          />
        )}
        <Button size="sm" onClick={handleSave}>
          <Check className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="outline" onClick={handleCancel}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className={`group flex items-center gap-2 ${className}`}>
      <span className="flex-1">{value || placeholder}</span>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => setIsEditing(true)}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Edit className="h-4 w-4" />
      </Button>
    </div>
  );
};

interface EditableListProps {
  items: string[];
  onSave: (items: string[]) => void;
  className?: string;
}

export const EditableList = ({ items, onSave, className = "" }: EditableListProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editItems, setEditItems] = useState(items);

  const handleSave = () => {
    onSave(editItems.filter(item => item.trim() !== ''));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditItems(items);
    setIsEditing(false);
  };

  const addItem = () => {
    setEditItems([...editItems, '']);
  };

  const updateItem = (index: number, value: string) => {
    const newItems = [...editItems];
    newItems[index] = value;
    setEditItems(newItems);
  };

  const removeItem = (index: number) => {
    setEditItems(editItems.filter((_, i) => i !== index));
  };

  if (isEditing) {
    return (
      <div className={`space-y-3 ${className}`}>
        {editItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <Input
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
              placeholder="Enter item..."
              className="flex-1"
            />
            <Button
              size="sm"
              variant="outline"
              onClick={() => removeItem(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={addItem}>
            Add Item
          </Button>
          <Button size="sm" onClick={handleSave}>
            <Check className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancel}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`group space-y-3 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
          <p className="text-muted-foreground">{item}</p>
        </div>
      ))}
      <Button
        size="sm"
        variant="ghost"
        onClick={() => setIsEditing(true)}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Edit className="h-4 w-4 mr-2" />
        Edit List
      </Button>
    </div>
  );
};