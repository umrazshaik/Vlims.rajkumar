
using System;
using System.Collections.Generic;


// Comment
public class DocumentPrint
{

    private int dridField;

    private string documenttitleField;

    private string printtypeField;

    private string documentnumberField;

    private int noofcopiesField;

    private string workflowField;

    private string reasonField;

    private string createdbyField;

    private DateTime? createddateField;

    private string modifiedbyField;

    private DateTime? modifieddateField;
    public string Status { get; set; }

    public int DRId
    {
        get
        {
            return this.dridField;
        }
        set
        {
            this.dridField = value;
        }
    }

    public string documenttitle
    {
        get
        {
            return this.documenttitleField;
        }
        set
        {
            this.documenttitleField = value;
        }
    }

    public string printtype
    {
        get
        {
            return this.printtypeField;
        }
        set
        {
            this.printtypeField = value;
        }
    }

    public string DocumentNumber
    {
        get
        {
            return this.documentnumberField;
        }
        set
        {
            this.documentnumberField = value;
        }
    }

    public int noofcopies
    {
        get
        {
            return this.noofcopiesField;
        }
        set
        {
            this.noofcopiesField = value;
        }
    }

    public string workflow
    {
        get
        {
            return this.workflowField;
        }
        set
        {
            this.workflowField = value;
        }
    }

    public string reason
    {
        get
        {
            return this.reasonField;
        }
        set
        {
            this.reasonField = value;
        }
    }

    public string CreatedBy
    {
        get
        {
            return this.createdbyField;
        }
        set
        {
            this.createdbyField = value;
        }
    }

    public DateTime? CreatedDate
    {
        get
        {
            return this.createddateField;
        }
        set
        {
            this.createddateField = value;
        }
    }

    public string ModifiedBy
    {
        get
        {
            return this.modifiedbyField;
        }
        set
        {
            this.modifiedbyField = value;
        }
    }

    public DateTime? ModifiedDate
    {
        get
        {
            return this.modifieddateField;
        }
        set
        {
            this.modifieddateField = value;
        }
    }
}

