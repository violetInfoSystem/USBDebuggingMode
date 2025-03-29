package com.violet.debuggingmode.plugin;

import android.util.Log;

public class DebuggingMode {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
