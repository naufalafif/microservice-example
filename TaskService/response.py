class BaseResponse:
    message = None
    data = None

    def __init__(self, use_message=True, use_data=True):
        self.use_message = use_message
        self.use_data = use_data
        self.others = {}

    @property
    def dicts(self):
        response = {}
        if self.use_message:
            response["message"] = self.message
        if self.use_data:
            response["data"] = self.data
        response.update(self.others)
        return response

    def update(self, key, value):
        if key == "data":
            self.data = value
        elif key == "message":
            self.message = value
        else:
            self.others[key] = value
        return self

    def delete(self, key):
        if key == "message":
            self.use_message = False
        elif key == "data":
            self.data = False
        elif key in self.others:
            del self.others[key]
        else:
            raise ValueError("{} not exist".format(key))

        return self
