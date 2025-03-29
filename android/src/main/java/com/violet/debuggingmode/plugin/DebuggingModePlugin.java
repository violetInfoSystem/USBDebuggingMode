package com.violet.debuggingmode.plugin;

import android.provider.Settings;
import android.content.Context;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.JSObject;

@CapacitorPlugin(name = "DebuggingMode")
public class DebuggingModePlugin extends Plugin {

   
    @PluginMethod
    public void isUsbDebuggingEnabled(PluginCall call) {
        try {
            Context context = getActivity(); 

            // Check if USB Debugging is enabled
            int adbStatus = Settings.Secure.getInt(
                context.getContentResolver(), 
                Settings.Secure.ADB_ENABLED, 
                0
            );

            // Check if Wireless ADB Debugging is enabled (Android 11+)
            int adbWifiStatus = Settings.Global.getInt(
                context.getContentResolver(), 
                "adb_wifi_enabled", 
                0
            );

            // Prepare response
            JSObject result = new JSObject();
            result.put("usbDebuggingEnabled", adbStatus == 1);
            result.put("wirelessAdbEnabled", adbWifiStatus == 1);

            call.resolve(result);
        } catch (SecurityException e) {
            call.reject("Permission denied: This app does not have access to ADB settings.");
        } catch (Exception e) {
            call.reject("Error retrieving debugging status: " + e.getMessage());
        }
    }
}
