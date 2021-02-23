#
# This is free software, licensed under the Apache License, Version 2.0 .
#

include $(TOPDIR)/rules.mk

LUCI_TITLE:=Luci for support ZeroTier
LUCI_DEPENDS:=+zerotier +ethtool
LUCI_PKGARCH:=all

define Package/luci-app-zerotier/preinst
#!/bin/sh
rm -rf $${IPKG_INSTROOT}/etc/init.d/zerotier >/dev/null 2>&1
exit 0
endef

#include ../../main.mk
include $(TOPDIR)/feeds/luci/luci.mk

# call BuildPackage - OpenWrt buildroot signature

