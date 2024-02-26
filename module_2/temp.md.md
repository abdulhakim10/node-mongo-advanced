# Finance Module Documentation

This document provides an overview of the PHP code for managing Finance module. This module is designed to handle dashboard-related operations in a web application. It interacts with a MongoDB database to fetch and manipulate dashboard data. The class includes properties and methods for managing user access, handling data filtering, and constructing API response bodies.

## DashboardData Class

The `DashboardData` class is a data container class within the `Dashboard` class. It defines properties related to dashboard data, such as `_id` and `summary`. The commented-out code suggests additional properties related to cashbook, sales, and targets.

### DashboardData Class Properties:

- `$_id`: Generated id of MongoDB.
- `$summary`: This property summarizes all classes.

### Summary:
- This class represents the summary of the dashboard. It has two properties: 
  
    - `$cashbook`: It contains cashbook's data.
    - `$sales`: It contains sales related information.

### Cashbook: 
- This class represents the cashbook data. It has one property: 
  
  - `$current_balance`: It's matching for `CurrentBalance` class.

### CurrentBalance: 
- This class represents the current balance of the cashbook. It has three properties: 
  
  - `$title`: Balance title.
  - `$last_update`: For last update of balance.
  - `$account`: Matching of `Account` class.

### Account: 
- This class represents an account. It has four properties: 
  
  - `code`: Account code.
  - `name`: Account name.
  - `total`: Total balance.
  - `currency`: Which Currency it is.

### Sales: 
- This class represents the sales data. It has two properties:
  
  - `current_sales`: Matching of `CurrentSales` Class.
  - `target`: Matching of `Target` Class.

### CurrentSale: 
- This class represents the current sales data. It has three properties: 
  
  - `title`: Title of current sales.
  - `last_update`: Latest update of sales.
  - `branch`: Name of the sale's branch.

### BranchSales: 
- This class represents the sales data for a specific branch. It has seven properties:
  
  - `branch_id`: Branch Id.
  - `today`: Amount of today's sales.
  - `yesterday`: Amount of yesterday's sales.
  - `this_month`: Sales amount of current month.
  - `last_month`: Sales amount of last month.
  - `this_year`: Sales amount of current year.
  - `currency`: Which currency it is.

### Target: 
- This class represents the target data. It has two properties:
  
  - `title`: Title of the sale's target.
  - `branch`: Name of the branch.

### YearlyTarget: 
- This class represents the yearly target data. It has two properties:
  
- `title`: Title of the yearly sale's target.
- `branch`: Name of the branch.

### BranchWiseTarget: 
- This class represents the target data for a specific branch. It has five properties:
  
  - `branch_id`: Branch Id.
  - `daily`: Amount of the daily sale's target.
  - `monthly`: Amount of the sale's target for a month.
  - `yearly`: Amount of the sale's targe for an year.
  - `currency`: Which currency it is.

> **_note:_** The above classes define the structure of the data that can be used to populate a dashboard. Each class has properties that represent different aspects of the dashboard, such as cashbook balance, sales data, and targets, and these classes are located at this path: `/src/assets/data-property/dashboard-data.php`.

### Dashboard Class

The `Dashboard` class is responsible for managing dashboard-related functionality. It includes properties for storing data, user information, and MongoDB connectivity. The class has methods for binding payload data, constructing API response bodies, and fetching dashboard data from MongoDB.

### Dashboard Class Properties:

#### Public Properties

- `$Data`: An instance of the `DashboardData` class, representing the structure of dashboard data.
- `$payload`: Holds the payload data received from the API request.
- `$total_data`: Placeholder for total data (not clear from the code how it's used).
- `$total_count`: Placeholder for total count (not clear from the code how it's used).
- `$msg`: Holds a message to be sent in the API response.
- `$success`: Indicates the success status of the operation.
- `$status_code`: Holds the HTTP status code for the API response.

#### Data Filtering Properties:

- `$filter_uid`: Used for filtering data by user ID.
- `$page_limit`: Specifies the number of rows to limit in the response.
- `$page_start`: Specifies the starting offset for paginated data.
- `$page_order`: Specifies the order by which the data should be sorted.
- `$page_sort`: Specifies the sorting order (ascending or descending).
- `$inactive`: Placeholder for an inactive flag (not clear from the code how it's used).

#### Standard Properties:

- `$user_id`: User ID accessing the class.
- `$branch_id`: Branch ID accessing the class.
- `$app_name`: Name of the application accessing the class.
- `$app_code`: Code of the application accessing the class.
- `$system_level`: Access level of the user accessing the class.
- `$system_access`: System access level of the user accessing the class.
- `$DB`: Instance of a database connector class.
- `$MONGODB`: MongoDB instance for database operations.
- `$Err`: Instance of the `Err` class for handling errors.
- `$err_id`: Placeholder for error ID.
- `$debug`: Debug flag for testing purposes.
- `::$version`: Static property indicating the class version number.
- `::$verdate`: Static property indicating the class version date.

## Methods

### `__construct($app_info, $DB, $data)`

The constructor method initializes key properties based on input parameters, including user information, app details, and a MongoDB connection. It also initializes instances of `DashboardData` and `Err` classes.

### Database Connection & API Versioning:

Here using the MongoDB PHP driver to connect to a MongoDB database. And specifying the API version for the MongoDB server.

### Usage:

```php
$uri = 'mongodb+srv:**************************';
$apiVersion = new ServerApi(ServerApi::V1);
$client = new MongoDB\Client($uri, [], ['serverApi' => $apiVersion]);
$this->MONGODB = $client->selectDatabase('finance_database');
```

### How To Work

- `$uri`: This variable holds the connection string for MongoDB. The actual connection details are hidden behind asterisks in your provided code. The connection string typically includes information about the server, authentication credentials, and other connection options.

- `$apiVersion`: An instance of the ServerApi class is created with version V1. This is used to specify the API version for the MongoDB server. In this case, it's set to version 1.

- `$client`: An instance of the MongoDB\Client class is created with the connection string (`$uri`), an empty options array `([])`, and the serverApi option set to the `$apiVersion` instance.

- `$this->MONGODB`: This line selects the `finance_database` as the active database. The selectDatabase method is used on the `$client` instance to choose the database.

### `bindPayloadWithData($payload)`:

Binds payload data to the class property `payload`.

### `resBody($status_code, $success, $msg, $data)`:

The `resBody` method is responsible for setting the response body with status code, success flag, message, and data.

#### Parameters:

- **$status_code** (int): HTTP status code of the response.
- **$success** (bool): Boolean indicating the success of an operation.
- **$msg** (string): A message to describe the result of an operation.
- **$data** (mixed): Data associated with the response.
  
### How to work
- If `$status_code` is not null, it sets the properties of the class `($status_code: 200, $success; true, $msg: 'success message', and $Data)` with the provided values.
  
- If `$status_code` is null, it sets default values for an internal server error` ($status_code: 500, $success: false, $message 'error message', and data as the error ID)`

### Usage:
>Setting response for success
```php
$this->resBody(200, true, 'Operation successful', $someData);
```
>Setting response for internal server error
```php
$this->resBody(500, false, 'Internal server error', $err_id);
```

### `bindData($data)`

Binds MongoDB document data to the `DashboardData` class properties.

### `getDashboardData()`

- Fetches dashboard data from database based on the provided `app_code` in the payload. It calls `bindData` to structure the data and constructs an API response body.
- Property associate with this method
  - `$Dashboard->action = "<value>"`: (required) Keyword for hitting the `getDashboardData()` method.
  - `$Dashboard->app_code = "<value>"` : (required) Differentiate the app by the `app_code`.

- Call the method like the example below
  - `$Dashboard->getDashboardData();`

- To access return or response value
  -  `$Dashboard->status_code;` : (200, 404, etc)
  -  `$Dashboard->success;` : (true or false)
  -  `$Dashboard->msg;` : (success or error message)
  -  `$Dashboard->Data;` : The whole data that will be fetch

- `$Dashboard->Data` : will return data like this format
```text
 [
        "_id" => "65b87434d2c2d1cd6bd28f97",
        "summary" => [
            "cashbook" => [
                "current_balance" => [
                    "title" => "Current Cashbook Balance",
                    "last_update" => "2024-01-30 04 =>32 =>23",
                    "account" => [
                        [
                            "code" => "1000002",
                            "name" => "MAYBANK",
                            "total" => 9401.76,
                            "currency" => "RM"
                        ],
                        [
                            "code" => "1000457",
                            "name" => "CASH",
                            "total" => 1050,
                            "currency" => "RM"
                        ],
                        [
                            "code" => "1001868",
                            "name" => "TOUCH N GO",
                            "total" => 0,
                            "currency" => "RM"
                        ],
                        [
                            "code" => "1002571",
                            "name" => "GKASH",
                            "total" => 3848.63,
                            "currency" => "RM"
                        ],
                        [
                            "code" => "1002905",
                            "name" => "TIKTOK WALLET",
                            "total" => 320.71,
                            "currency" => "RM"
                        ],
                        [
                            "code" => "1002963",
                            "name" => "EWALLET SPARE PART",
                            "total" => -1279.75,
                            "currency" => "RM"
                        ],
                        [
                            "code" => "1002962",
                            "name" => "PETTY CASH",
                            "total" => 190.7,
                            "currency" => "RM"
                        ],
                        [
                            "code" => "1000001",
                            "name" => "ADVANCE CASH",
                            "total" => -507,
                            "currency" => "RM"
                        ],
                        [
                            "code" => "1002280",
                            "name" => "SENANGPAY CC",
                            "total" => 0,
                            "currency" => "RM"
                        ],
                        [
                            "code" => "1002279",
                            "name" => "SENANGPAY FPX",
                            "total" => 0,
                            "currency" => "RM"
                        ]
                    ]
                ]
            ],
            "sales" => [
                "current_sales" => [
                    "title" => "Current Sales Summary",
                    "last_update" => "2024-01-30 04 =>32 =>23",
                    "branch" => [
                        [
                            "branch_id" => "1",
                            "today" => 0,
                            "yesterday" => 2337,
                            "this_month" => 32487,
                            "last_month" => 39482.55,
                            "this_year" => 32487,
                            "currency" => "RM"
                        ]
                    ]
                ],
                "target" => [
                    "2024" => [
                        "branch" => [
                            [
                                "branch_id" => "1",
                                "daily" => 5000,
                                "monthly" => 100000,
                                "yearly" => 1000000,
                                "currency" => "RM"
                            ]
                        ]
                    ],
                    "title" => "Sales Target"
                ]
            ]
        ]
    ]
```